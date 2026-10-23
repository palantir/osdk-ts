import{j as i}from"./iframe-CxT5Jan_.js";import{O as p}from"./object-table-UW4KPqzS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3VNrqd2.js";import"./preload-helper-B2aJWYzQ.js";import"./Table-COCtIDyb.js";import"./index-Dtz5PgLF.js";import"./Dialog-CCC2rkEz.js";import"./cross-CN6xf_dQ.js";import"./svgIconContainer-hCqCvGhu.js";import"./useBaseUiId-B-OQdXnZ.js";import"./InternalBackdrop-BNvBplbQ.js";import"./composite-DGmZ6kEt.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./index-VTk_L-CK.js";import"./useEventCallback-DJgEXQnv.js";import"./SkeletonBar-DO5a1Cj6.js";import"./LoadingCell-C99H8f55.js";import"./ColumnConfigDialog-EyJedUwR.js";import"./DraggableList-D8pu-QX3.js";import"./search-CDYNfwYQ.js";import"./Input-uXNf_zLb.js";import"./useControlled-HfGVJvVO.js";import"./Button-g3dA2T-X.js";import"./small-cross-DOBtvqtk.js";import"./ActionButton-Drinm68p.js";import"./Checkbox-C6faQSvd.js";import"./useValueChanged-B-mq1KuU.js";import"./CollapsiblePanel-CS3WD6U4.js";import"./MultiColumnSortDialog-C-bdESQG.js";import"./MenuTrigger-6y7n_vAV.js";import"./CompositeItem-DLM-dgwp.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./getDisabledMountTransitionStyles-BDF0Bffw.js";import"./getPseudoElementBounds-WZiK9BcL.js";import"./chevron-down-CJ808Qtk.js";import"./index-qScKd8ht.js";import"./error-ABOYqx1m.js";import"./BaseCbacBanner-CKAihuJM.js";import"./makeExternalStore-z4BPzaiv.js";import"./Tooltip-BCH3arb9.js";import"./PopoverPopup-BEr_vAbM.js";import"./debounce-BM3c7HzB.js";import"./useOsdkClient-BdjKd_qM.js";import"./tick-B08JakEq.js";import"./DropdownField-j_jVFNln.js";import"./isEqual-D_Z0bU5y.js";import"./withOsdkMetrics-Dv_WEx2y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
