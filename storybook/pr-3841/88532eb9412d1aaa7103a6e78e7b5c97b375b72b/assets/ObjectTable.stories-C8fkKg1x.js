import{j as i}from"./iframe-Bbl8xWS4.js";import{O as p}from"./object-table-Csi300vr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJ_9A7Js.js";import"./preload-helper-BUAbRzmt.js";import"./Table-C6stjXeD.js";import"./index-BrhvBMro.js";import"./Dialog-CxqhZeM9.js";import"./cross-D1K3qdEd.js";import"./svgIconContainer-C49n10_C.js";import"./useBaseUiId-Cmt5VEHx.js";import"./InternalBackdrop-DQJVIwhZ.js";import"./composite-BZ5wkolO.js";import"./index-Dg_zHENz.js";import"./index-CHJ1j1l2.js";import"./index-CE5JSKtI.js";import"./useEventCallback-BqyCjoBA.js";import"./SkeletonBar-BtzllBK1.js";import"./LoadingCell-DJj0Q7IJ.js";import"./ColumnConfigDialog-DepBJ68H.js";import"./DraggableList-DT97Kib1.js";import"./search-BoObENrO.js";import"./Input-C7X_QVu0.js";import"./useControlled-DGf-N-MW.js";import"./Button-vDgXwn6I.js";import"./small-cross-DTh3t08g.js";import"./ActionButton-B0l2nlsG.js";import"./Checkbox-C7FrLcjj.js";import"./useValueChanged-1sJEL3iN.js";import"./CollapsiblePanel-j2kmvttF.js";import"./MultiColumnSortDialog-CAbQuHe5.js";import"./MenuTrigger-BHWoM-Q_.js";import"./CompositeItem-UpHYLeRj.js";import"./ToolbarRootContext-mlwQOMjb.js";import"./getDisabledMountTransitionStyles-DYMa362i.js";import"./getPseudoElementBounds-r4lx2DpE.js";import"./chevron-down-CguzkHKU.js";import"./index-Cg7IxkTK.js";import"./error-BL4iX6t3.js";import"./BaseCbacBanner-BYnRSoLP.js";import"./makeExternalStore-k_EKqWBg.js";import"./Tooltip-d-UN8rHt.js";import"./PopoverPopup-CwfkGrBk.js";import"./debounce-BFaUKRpC.js";import"./useOsdkClient-BVIzgYNI.js";import"./tick-CSFR0LjW.js";import"./DropdownField-DdP67yjj.js";import"./isEqual-v8lWUpOV.js";import"./withOsdkMetrics-D-pE8QrY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
