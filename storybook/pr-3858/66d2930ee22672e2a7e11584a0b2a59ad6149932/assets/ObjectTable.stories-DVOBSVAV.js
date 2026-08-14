import{j as i}from"./iframe-BRo99t7B.js";import{O as p}from"./object-table-C-kuDLjo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B74r0CM_.js";import"./preload-helper-CigqD04b.js";import"./Table-DJA1uEml.js";import"./index-R8YjK2xc.js";import"./Dialog-CqcUi2Md.js";import"./cross-CDIMFWJV.js";import"./svgIconContainer-BQOaCuBG.js";import"./useBaseUiId-BSnWm0Ty.js";import"./InternalBackdrop-DHK8SVPy.js";import"./composite-DVnIZAH7.js";import"./index-CGghKiPn.js";import"./index-Duc0FtTv.js";import"./index-D21X6LUF.js";import"./useEventCallback-nAJ20U8L.js";import"./SkeletonBar-mNO0fj1P.js";import"./LoadingCell-CP8VUqpi.js";import"./ColumnConfigDialog-DFxLQGNF.js";import"./DraggableList-KlJTARjY.js";import"./search-GQ4U1QoP.js";import"./Input-DcSDPPuu.js";import"./useControlled-nWezCynf.js";import"./Button-BkY4eupJ.js";import"./small-cross-CAb1IP_3.js";import"./ActionButton-7DJSbSEH.js";import"./Checkbox-BVhc7lET.js";import"./useValueChanged-qoR0fUld.js";import"./CollapsiblePanel-C9cjRkgh.js";import"./MultiColumnSortDialog-D7G0ajgK.js";import"./MenuTrigger-rzq5Pqiz.js";import"./CompositeItem-D0ZY96tK.js";import"./ToolbarRootContext-CXGtLwjz.js";import"./getDisabledMountTransitionStyles-Cebom1b-.js";import"./getPseudoElementBounds-B3ez0_sP.js";import"./chevron-down-_xL6OTaR.js";import"./index-CB_jfM4i.js";import"./error-DCHg5wYe.js";import"./BaseCbacBanner-CeRJcetP.js";import"./makeExternalStore-BmrHbVoq.js";import"./Tooltip-2SRPn51X.js";import"./PopoverPopup-B4Rm8UaV.js";import"./debounce-BV4tZJKC.js";import"./useOsdkClient-C_oVdPtU.js";import"./tick-CSvfDoia.js";import"./DropdownField-B3HIUGjf.js";import"./isEqual-D0-FiT0l.js";import"./withOsdkMetrics-CbR5n7Rt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
