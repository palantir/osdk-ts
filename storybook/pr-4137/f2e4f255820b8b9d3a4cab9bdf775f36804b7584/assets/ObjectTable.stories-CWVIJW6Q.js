import{j as i}from"./iframe-CuEAZ9dr.js";import{O as p}from"./object-table-VtjZM0Xx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aj36mNip.js";import"./preload-helper-BGz8wZQR.js";import"./Table-NTPstvxc.js";import"./index-DxIg76dX.js";import"./Dialog-BkDP-GvL.js";import"./cross-WWifeHY9.js";import"./svgIconContainer-BvlE_9W9.js";import"./useBaseUiId-BeONGSYl.js";import"./InternalBackdrop-BkqsHjIV.js";import"./composite-Cuvx7hIz.js";import"./index-Dvn68MG5.js";import"./index-CZP_mOC4.js";import"./index-BBIDRv9-.js";import"./useEventCallback-pnT8ZyKV.js";import"./SkeletonBar-IMTg_Ovw.js";import"./LoadingCell-Cn4lhMnt.js";import"./ColumnConfigDialog-BjNfcseF.js";import"./DraggableList-C6eWQzGl.js";import"./search-DwLfbIUw.js";import"./Input-CVHctVKc.js";import"./useControlled-DvKAwvsQ.js";import"./Button-D_a0PtrD.js";import"./small-cross-R78MO7fs.js";import"./ActionButton--142FRTZ.js";import"./Checkbox-BOkyO1tb.js";import"./useValueChanged-Ci2GyKEy.js";import"./CollapsiblePanel-BleGNdwU.js";import"./MultiColumnSortDialog-aYJ8Fftp.js";import"./MenuTrigger-DWu_yWKM.js";import"./CompositeItem-BaOcY-5M.js";import"./ToolbarRootContext-D1XcDui9.js";import"./getDisabledMountTransitionStyles-BRocjPLc.js";import"./getPseudoElementBounds-D_hAP4_U.js";import"./chevron-down-CU80jHGh.js";import"./index-DQjcUOKb.js";import"./error-IRs09aCG.js";import"./BaseCbacBanner-CvnGCxIt.js";import"./makeExternalStore-C8vIUtyz.js";import"./Tooltip-VrBjATlQ.js";import"./PopoverPopup-SkuTKSE6.js";import"./debounce-C37B9MoR.js";import"./useOsdkClient-DaV3EpeN.js";import"./tick-DnPfu0Vb.js";import"./DropdownField-BaUKfk6e.js";import"./isEqual-Aq-a2GgY.js";import"./withOsdkMetrics-BPCuw1K8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
