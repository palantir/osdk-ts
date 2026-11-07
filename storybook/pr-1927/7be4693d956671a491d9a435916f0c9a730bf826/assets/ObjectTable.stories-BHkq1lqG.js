import{j as i}from"./iframe-DaWek49r.js";import{O as p}from"./object-table-B-XjcBbq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BBXcT-_i.js";import"./preload-helper-CpWLgODR.js";import"./Table-C3kjScnV.js";import"./index-7xB0j-h3.js";import"./Dialog-oZD8Leel.js";import"./cross-BTg86JZI.js";import"./svgIconContainer-BLvyKKH5.js";import"./useBaseUiId-BS0koSYJ.js";import"./InternalBackdrop-BtnFxY7R.js";import"./composite-3FCOWJk0.js";import"./index-CmmmgmWL.js";import"./index-B6v8umRH.js";import"./index-Ci53BpX5.js";import"./useEventCallback-ROl2U3Zc.js";import"./SkeletonBar-DiJ1Hvir.js";import"./LoadingCell-Cd0U2uhn.js";import"./ColumnConfigDialog-DgNXnEmf.js";import"./DraggableList-CiqeYUhd.js";import"./search-DAzvWU8V.js";import"./Input-RkKX3V5Z.js";import"./useControlled-CPSRk279.js";import"./Button-QRlJPal1.js";import"./small-cross-BIIMg4DU.js";import"./ActionButton-DaPNcgvE.js";import"./Checkbox-C1O-p1-8.js";import"./useValueChanged-BmCio-Qe.js";import"./CollapsiblePanel-DKLWDwCu.js";import"./MultiColumnSortDialog-C5iXwZRR.js";import"./MenuTrigger-ImRWkubh.js";import"./CompositeItem-C0lAIjsd.js";import"./ToolbarRootContext-B9vHR48n.js";import"./getDisabledMountTransitionStyles-Cr6AUOCj.js";import"./getPseudoElementBounds-DArBdZgv.js";import"./chevron-down-Cos6kkQA.js";import"./index-DdMC5lnj.js";import"./error-AanNsvpp.js";import"./BaseCbacBanner-f5h26H1M.js";import"./makeExternalStore-Dui8kxii.js";import"./Tooltip-D6D1ArJb.js";import"./isObject-W7GYGzhg.js";import"./debounce-DcMgEISB.js";import"./useOsdkClient-B9Apk1sW.js";import"./tick-DTzur8x4.js";import"./DropdownField-BHLcVE6g.js";import"./isEqual-DGz_SmIW.js";import"./_baseIsEqual-BQRjoz-i.js";import"./withOsdkMetrics-DPmknckC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
