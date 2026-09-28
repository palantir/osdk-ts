import{j as i}from"./iframe-BoQuj6Ft.js";import{O as p}from"./object-table-GNC1D2ug.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHo-iRg8.js";import"./preload-helper-DFHoCRfY.js";import"./Table-CDFpwVxP.js";import"./index-B3vkyGje.js";import"./Dialog-DW-h_BPY.js";import"./cross-DIlflA87.js";import"./svgIconContainer-D1Y91RJ2.js";import"./useBaseUiId-DKKiKBjO.js";import"./InternalBackdrop-DgOgxUR-.js";import"./composite-CvoBvof0.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./index-DsXJv-A-.js";import"./useEventCallback-DnyNlyEn.js";import"./SkeletonBar-nJu3VKHu.js";import"./LoadingCell-Djs5NpLk.js";import"./ColumnConfigDialog-UHepu_B4.js";import"./DraggableList-Bsl9deDL.js";import"./search-DxfJTzvK.js";import"./Input-BrV6l60a.js";import"./useControlled-DfpvXrbD.js";import"./Button-CVGCG-PX.js";import"./small-cross-PzH5JPQr.js";import"./ActionButton-ZwUOGMpg.js";import"./Checkbox-Caya9tIR.js";import"./useValueChanged-DxKn8kpX.js";import"./CollapsiblePanel-CDq3d3lQ.js";import"./MultiColumnSortDialog-DB1LaGMz.js";import"./MenuTrigger-BheayIBg.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./getDisabledMountTransitionStyles-CAOvj7ui.js";import"./getPseudoElementBounds-W6TVi3du.js";import"./chevron-down-DuDBYDyj.js";import"./index-Cye0oCf9.js";import"./error-ovbXz9QM.js";import"./BaseCbacBanner-C7FvseMr.js";import"./makeExternalStore-ILzBw2IP.js";import"./Tooltip-RUFZkZKo.js";import"./PopoverPopup-CtGLWZkC.js";import"./debounce-DKOD7ARd.js";import"./useOsdkClient-BlIU4lOf.js";import"./tick-Cdn4730X.js";import"./DropdownField-B9wcQ97-.js";import"./isEqual-B9kgXbB2.js";import"./withOsdkMetrics-Bww6KylD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
