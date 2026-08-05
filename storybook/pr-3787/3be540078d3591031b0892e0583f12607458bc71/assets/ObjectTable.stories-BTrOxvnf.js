import{j as i}from"./iframe-B5ZzFpGV.js";import{O as p}from"./object-table-BAN1bX6b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8q015nN.js";import"./preload-helper-BJvIoz8B.js";import"./Table-B3CRxTpo.js";import"./index-z4xETEDy.js";import"./Dialog-DeF2s5sl.js";import"./cross-BGaKNqwh.js";import"./svgIconContainer-CW1kT3WQ.js";import"./useBaseUiId-DJnMsM3b.js";import"./InternalBackdrop-t-Tkp2mf.js";import"./composite-ilR61S-U.js";import"./index-BXOUosox.js";import"./index-CRM3J1t9.js";import"./index-pipDnF82.js";import"./useEventCallback-B8zk15kN.js";import"./SkeletonBar-DJk1-8Bw.js";import"./LoadingCell-x1ad322X.js";import"./ColumnConfigDialog-uerieJHr.js";import"./DraggableList-BlLBygSa.js";import"./search-C_g1Mr7n.js";import"./Input-CwAbMfOY.js";import"./useControlled-DiSq_f2x.js";import"./isEqual-wEqXlrPC.js";import"./isObject-GtkGHpJ0.js";import"./Button-CYH1D7qG.js";import"./ActionButton-BDEvghIZ.js";import"./Checkbox-D5r_2i7u.js";import"./useValueChanged-DHoXd38F.js";import"./CollapsiblePanel-BQpiv9Vm.js";import"./MultiColumnSortDialog-DWxuuXXs.js";import"./MenuTrigger-D9c0vcFB.js";import"./CompositeItem-C8C3gNK6.js";import"./ToolbarRootContext-ChmL4KtX.js";import"./getDisabledMountTransitionStyles-BLQLaFmr.js";import"./getPseudoElementBounds-DZHDf8sw.js";import"./chevron-down-D8Xw2XSL.js";import"./index-DTZ3ogMT.js";import"./error-CweQ51t5.js";import"./BaseCbacBanner-uc8qvZPA.js";import"./makeExternalStore-WLdqxZL2.js";import"./Tooltip-CE0dRtvL.js";import"./PopoverPopup-dtml0Wne.js";import"./toNumber-AlaGGTap.js";import"./useOsdkClient-DEz3juUB.js";import"./tick-Cruxb3nb.js";import"./DropdownField-ButkmT75.js";import"./withOsdkMetrics-B_Ikpxmc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
