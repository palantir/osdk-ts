import{j as i}from"./iframe-CJFgfqJQ.js";import{O as p}from"./object-table-BIKPZuQr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CPJhJ6Gp.js";import"./preload-helper-CB2bVH8w.js";import"./Table-BfIW66aU.js";import"./index-BDuqkffg.js";import"./Dialog-D4LsLmkw.js";import"./cross-CGqAK_rm.js";import"./svgIconContainer-SiM3kExX.js";import"./useBaseUiId-KMobehZg.js";import"./InternalBackdrop-DVgaqM5_.js";import"./composite-D_U5DxNy.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./index-Dmlu-QeK.js";import"./useEventCallback-DwOB9kEk.js";import"./SkeletonBar-dUsinxB7.js";import"./LoadingCell-zvH6oYga.js";import"./ColumnConfigDialog-CSyGSnFa.js";import"./DraggableList-DHvtlonC.js";import"./search-DdMhLoUU.js";import"./Input-DmfjYINK.js";import"./useControlled-HhXb2sFD.js";import"./Button-cr6PNOy5.js";import"./small-cross-Bvt4-Cci.js";import"./ActionButton-qaoG7oqA.js";import"./Checkbox-DKqm-Ws3.js";import"./useValueChanged-DDVfSaOH.js";import"./CollapsiblePanel-B5YF5ZIm.js";import"./MultiColumnSortDialog-B88gd12P.js";import"./MenuTrigger-BYgin9ek.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./getDisabledMountTransitionStyles-B5vF6vDs.js";import"./getPseudoElementBounds-BJ_KrdWI.js";import"./chevron-down-DGQA7IYp.js";import"./index-DFjPXJ5y.js";import"./error-DUmxQ8UR.js";import"./BaseCbacBanner-DbRUrc0m.js";import"./makeExternalStore-v_n6tY7p.js";import"./Tooltip-Dv9997-7.js";import"./PopoverPopup-Cs5VOili.js";import"./debounce-CeHNcT_D.js";import"./useOsdkClient-DsGPKyv1.js";import"./tick-DFl5nZ0u.js";import"./DropdownField-DwonOWM7.js";import"./isEqual-CMNbp24S.js";import"./withOsdkMetrics-DL4u8lDZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
