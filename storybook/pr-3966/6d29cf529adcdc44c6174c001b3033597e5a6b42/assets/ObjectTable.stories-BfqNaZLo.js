import{j as i}from"./iframe-DIE0F-FJ.js";import{O as p}from"./object-table-cof2d8kI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DECES1a3.js";import"./preload-helper-CdCw_D6s.js";import"./Table-BZJjvyRp.js";import"./index-BXhLRBiI.js";import"./Dialog-Bnkkq5ka.js";import"./cross-B--tnJuh.js";import"./svgIconContainer-BGsheyOK.js";import"./useBaseUiId-BGN3IKJR.js";import"./InternalBackdrop-79eMq3pC.js";import"./composite-RzFWQe2R.js";import"./index-PVYT1aqJ.js";import"./index-BkvxGWCD.js";import"./index-FrQW-LFi.js";import"./useEventCallback-Bo0Eo9Z-.js";import"./SkeletonBar-DqHGhi1E.js";import"./LoadingCell-lh6hOK48.js";import"./ColumnConfigDialog-eGaKwVDF.js";import"./DraggableList-CXKoEXmO.js";import"./search-DuYiMzJM.js";import"./Input-BprksExu.js";import"./useControlled-BuhNUpGX.js";import"./Button-CczGpO78.js";import"./small-cross-BJcg7TMk.js";import"./ActionButton-fl2F2QSy.js";import"./Checkbox-DJyftdqh.js";import"./useValueChanged-CHqOLEmB.js";import"./CollapsiblePanel-iUwAaxXA.js";import"./MultiColumnSortDialog-DViRMDVg.js";import"./MenuTrigger-BH__6KDZ.js";import"./CompositeItem-Cu0VA6bk.js";import"./ToolbarRootContext-CovMsxmO.js";import"./getDisabledMountTransitionStyles-BGeDrQBn.js";import"./getPseudoElementBounds-CbYyKTV-.js";import"./chevron-down-Dw6bDKjP.js";import"./index-Bd5DnQxC.js";import"./error-BVPuSvQJ.js";import"./BaseCbacBanner-DF2r3SKx.js";import"./makeExternalStore-7uZMc2Bx.js";import"./Tooltip-BfeDHBZ_.js";import"./PopoverPopup-DdihVGuh.js";import"./debounce-CXfaftQK.js";import"./useOsdkClient-T1fMghRS.js";import"./tick-71oNJlSZ.js";import"./DropdownField-BDFhFm-I.js";import"./isEqual-CFz0TlTP.js";import"./withOsdkMetrics-g9qSGbZX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
