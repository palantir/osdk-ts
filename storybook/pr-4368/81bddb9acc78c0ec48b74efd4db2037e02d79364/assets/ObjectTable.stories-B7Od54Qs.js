import{j as i}from"./iframe-Bq9JkkcV.js";import{O as p}from"./object-table-D6qgwCv6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-h61X_VDv.js";import"./preload-helper-Cqv5s2jj.js";import"./Table-DIqREGrv.js";import"./index-LFRJGjst.js";import"./Dialog-C2WNCz-n.js";import"./cross-Bk3fKCS7.js";import"./svgIconContainer-Cf0ZuXQT.js";import"./useBaseUiId-CRKQdUfR.js";import"./InternalBackdrop-BQMKI1KR.js";import"./composite-B8AhlmVu.js";import"./index-BLJWGSk2.js";import"./index-CiXmcJM_.js";import"./index-BNaE_Tt-.js";import"./useEventCallback-D9Esi33T.js";import"./SkeletonBar-DXhct9uD.js";import"./LoadingCell-Dc9leBYT.js";import"./ColumnConfigDialog-6z222bHh.js";import"./DraggableList-BOvLWd2b.js";import"./search-BNWG7jMi.js";import"./Input-CVFiTt6w.js";import"./useControlled-BOwVH0ok.js";import"./Button-CXvtykDV.js";import"./small-cross-BnGu73G1.js";import"./ActionButton-DsKQLZsS.js";import"./Checkbox-DzCahne8.js";import"./useValueChanged-smqOtCks.js";import"./CollapsiblePanel-BzrJ9qI-.js";import"./MultiColumnSortDialog-DdUBFoKl.js";import"./MenuTrigger-BSmrj6RT.js";import"./CompositeItem-CNijsmc1.js";import"./ToolbarRootContext-Cg88OliQ.js";import"./getDisabledMountTransitionStyles-BX0EtKPr.js";import"./getPseudoElementBounds-CerPCRKU.js";import"./chevron-down-BLdYc2zE.js";import"./index-CPslm5If.js";import"./error-Bc6kFz4J.js";import"./BaseCbacBanner-Dtq1flvT.js";import"./makeExternalStore-BoBeGpud.js";import"./Tooltip-Dq_sB7xx.js";import"./isObject-CmhVC78r.js";import"./debounce-CzyUj9dS.js";import"./useOsdkClient-44rjUua8.js";import"./tick-BFpzlNMH.js";import"./DropdownField-DAKJZGR4.js";import"./isEqual-Zzl_MNMm.js";import"./_baseIsEqual-3k_rL-8A.js";import"./withOsdkMetrics-BtcppCcW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
