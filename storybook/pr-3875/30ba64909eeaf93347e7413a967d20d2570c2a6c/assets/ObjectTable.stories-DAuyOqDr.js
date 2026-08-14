import{j as i}from"./iframe-C3gWLFeF.js";import{O as p}from"./object-table-C9jS4D-A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ByHsvVqq.js";import"./preload-helper-B5WkgH5S.js";import"./Table-7PutLn_O.js";import"./index-zbAiaIKZ.js";import"./Dialog-htHMIiV_.js";import"./cross-OJYwbU-X.js";import"./svgIconContainer-CatKefh0.js";import"./useBaseUiId-u8lDlXG3.js";import"./InternalBackdrop-Cy20o8GG.js";import"./composite-wYiSASeA.js";import"./index-B5sOm2sk.js";import"./index-RpbhQ7R2.js";import"./index-D5sUdKzc.js";import"./useEventCallback-BVsJ2e3U.js";import"./SkeletonBar-DMUqu9HM.js";import"./LoadingCell-DyY2yJ3K.js";import"./ColumnConfigDialog-CGgfMgKc.js";import"./DraggableList-DFgLwxtd.js";import"./search-C7TpUcEG.js";import"./Input-DxK0rYjH.js";import"./useControlled-D4ZhQDM-.js";import"./Button-z5VY6lqA.js";import"./small-cross-Dg9jp1lJ.js";import"./ActionButton-DPsCNtEG.js";import"./Checkbox-Cfd_YyW0.js";import"./useValueChanged-Czd01fGs.js";import"./CollapsiblePanel-DClJfuOE.js";import"./MultiColumnSortDialog-KXkxir9T.js";import"./MenuTrigger-BFueQcjv.js";import"./CompositeItem-aMc0HNV_.js";import"./ToolbarRootContext-CXNAcqNV.js";import"./getDisabledMountTransitionStyles-By20pHy9.js";import"./getPseudoElementBounds-CI4G4fnd.js";import"./chevron-down-C2wXIFgz.js";import"./index-B-Yw7Cy9.js";import"./error-BM64Bzf-.js";import"./BaseCbacBanner-DtP8wzf-.js";import"./makeExternalStore-y3W5E1gl.js";import"./Tooltip-kC1I1FSA.js";import"./PopoverPopup-DH8P3TnQ.js";import"./debounce-BT1KgTVv.js";import"./useOsdkClient-BepgIy04.js";import"./tick-DPtCobgt.js";import"./DropdownField-Cpn2i5fy.js";import"./isEqual-B-ZaIAD2.js";import"./withOsdkMetrics-BIxduPTg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
