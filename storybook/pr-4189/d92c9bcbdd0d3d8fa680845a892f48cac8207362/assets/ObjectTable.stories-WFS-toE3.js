import{j as i}from"./iframe-BQiIs3LK.js";import{O as p}from"./object-table-T4goorN8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bp5udzVG.js";import"./preload-helper-Dw2jPLDK.js";import"./Table-DseHNMSU.js";import"./index-z86HRZpN.js";import"./Dialog-C4NP9gdP.js";import"./cross-BBOEsUzu.js";import"./svgIconContainer-De2PI1mj.js";import"./useBaseUiId-CLlcPdwB.js";import"./InternalBackdrop-CMbNIGM4.js";import"./composite-CMA2GnO4.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./index-OK0CF_qs.js";import"./useEventCallback-Q6WE3pG5.js";import"./SkeletonBar-BakbpVs6.js";import"./LoadingCell-CAdes-UV.js";import"./ColumnConfigDialog-ANSH7ooC.js";import"./DraggableList-DBzvUx3G.js";import"./search-CwMbCA9x.js";import"./Input-CZoH0d1X.js";import"./useControlled-CUE02bZW.js";import"./Button-mut1rbst.js";import"./small-cross-CG4zdxxi.js";import"./ActionButton-6eqsHTiZ.js";import"./Checkbox-CCoQAGLp.js";import"./useValueChanged-ClDHkrux.js";import"./CollapsiblePanel-C-iaOM6m.js";import"./MultiColumnSortDialog-DJKsNSEv.js";import"./MenuTrigger-CS0F-rlF.js";import"./CompositeItem-B87J6QYh.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./getDisabledMountTransitionStyles-uWkBK1pF.js";import"./getPseudoElementBounds-CjaTZFDC.js";import"./chevron-down-DNRgePmp.js";import"./index-CGjn93Dw.js";import"./error-Cm3qz5vo.js";import"./BaseCbacBanner-M7Tp4sQm.js";import"./makeExternalStore-CZnmcOAZ.js";import"./Tooltip-UKYFeKFX.js";import"./PopoverPopup-D7zJiBr2.js";import"./debounce-ncyQhy3A.js";import"./useOsdkClient-ByCOtk2g.js";import"./tick-BiIYLlxf.js";import"./DropdownField-BpZnmzBW.js";import"./isEqual-CCG3YC-I.js";import"./withOsdkMetrics-CvdPVaRc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
