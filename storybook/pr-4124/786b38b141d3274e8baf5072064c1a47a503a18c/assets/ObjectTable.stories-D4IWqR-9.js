import{j as i}from"./iframe-UxLT7lYy.js";import{O as p}from"./object-table-Cc_qfxoK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hmQrtbTj.js";import"./preload-helper-CV6iJ-wL.js";import"./Table-BeinkaVZ.js";import"./index-CaLIOjRM.js";import"./Dialog-VrDMfQLV.js";import"./cross-gbTOR5Si.js";import"./svgIconContainer-HqUabHbJ.js";import"./useBaseUiId-DR0pgCNJ.js";import"./InternalBackdrop-uyTw1RdA.js";import"./composite-BYQddcpi.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./index-_o97Q59k.js";import"./useEventCallback-DjbC_S6q.js";import"./SkeletonBar-B6QGYhFN.js";import"./LoadingCell-BHo-JVA1.js";import"./ColumnConfigDialog-C4pi-a3A.js";import"./DraggableList-B7mfCITH.js";import"./search-K5dECyKJ.js";import"./Input-DHvCRjgv.js";import"./useControlled-CDHE3Jck.js";import"./Button-DZCJ8vSD.js";import"./small-cross-Bw-OCkf4.js";import"./ActionButton-C661vjkS.js";import"./Checkbox-AE0u9S9J.js";import"./useValueChanged-CzG0v9jK.js";import"./CollapsiblePanel-BbBRdFzC.js";import"./MultiColumnSortDialog-fg3k3Klu.js";import"./MenuTrigger-ynnIwSop.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./getDisabledMountTransitionStyles-CHMZ4_kz.js";import"./getPseudoElementBounds-x7euGpS2.js";import"./chevron-down-CNsNwb1i.js";import"./index-azpejN4Q.js";import"./error-CvnQXRAs.js";import"./BaseCbacBanner-CTHYjrUf.js";import"./makeExternalStore-D1qwl-gG.js";import"./Tooltip-7LzxkM7s.js";import"./PopoverPopup-D67Wkzxz.js";import"./debounce-BO8okfFM.js";import"./useOsdkClient-Da_K8BYI.js";import"./tick-BPmR5WxH.js";import"./DropdownField-D7GJRPWS.js";import"./isEqual-BhpxjI6o.js";import"./withOsdkMetrics-CgTr75Ie.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
