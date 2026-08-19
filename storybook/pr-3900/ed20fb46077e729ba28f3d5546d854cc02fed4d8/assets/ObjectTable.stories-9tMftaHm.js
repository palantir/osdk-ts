import{j as i}from"./iframe-DRuc0GBP.js";import{O as p}from"./object-table-DmGO0Vxo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CR0pEJ_I.js";import"./preload-helper-CRRYqW21.js";import"./Table-BR8CCk-8.js";import"./index-Df25XFZb.js";import"./Dialog-BC4bcRh6.js";import"./cross-C3j-rtHx.js";import"./svgIconContainer-8epjwYsu.js";import"./useBaseUiId-DbcBxDLS.js";import"./InternalBackdrop-i581aqEB.js";import"./composite-DCht-HgF.js";import"./index-DpJFda_e.js";import"./index-BalUdg1Y.js";import"./index-YiEFMxhB.js";import"./useEventCallback-Ds2xBSpC.js";import"./SkeletonBar-B8N_Ahmp.js";import"./LoadingCell-Bftk-ZRu.js";import"./ColumnConfigDialog-B521fVb-.js";import"./DraggableList-DgLUOU_-.js";import"./search-De5zerSm.js";import"./Input-qFxyrE0p.js";import"./useControlled-DhQ1jfam.js";import"./Button-DNV5pzPO.js";import"./small-cross-pAWOo5vD.js";import"./ActionButton-C0tEvPDb.js";import"./Checkbox-CR8ot2aQ.js";import"./useValueChanged-TdIj53uF.js";import"./CollapsiblePanel-DEy_naSL.js";import"./MultiColumnSortDialog-BhpT7X1D.js";import"./MenuTrigger-BBa-7LXr.js";import"./CompositeItem-BC6rjLhn.js";import"./ToolbarRootContext-DMBrxqfV.js";import"./getDisabledMountTransitionStyles-CFsGZL01.js";import"./getPseudoElementBounds-DPZ3DPV5.js";import"./chevron-down-Bj7gjeyM.js";import"./index-BUJ8RC2M.js";import"./error-CajMr2N5.js";import"./BaseCbacBanner-DGZigbUp.js";import"./makeExternalStore-DzVXPn5S.js";import"./Tooltip-Bbl8mehV.js";import"./PopoverPopup-_gjSlE1P.js";import"./debounce-OZctj2Y3.js";import"./useOsdkClient-ZsKxr3Nm.js";import"./tick-BX4z4qIP.js";import"./DropdownField-DyPgZ25Y.js";import"./isEqual-B9eMVgOn.js";import"./withOsdkMetrics-BIITkI-U.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
