import{j as i}from"./iframe-Bgb2wSaw.js";import{O as p}from"./object-table-B0S9YS6J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BpShOoKU.js";import"./preload-helper-CAyUgZKm.js";import"./Table-Dn1EHvQR.js";import"./index-Lnta--SZ.js";import"./Dialog-426aTfaL.js";import"./cross-BBwyRiM8.js";import"./svgIconContainer-DLn89RUi.js";import"./useBaseUiId-Cl3siqr8.js";import"./InternalBackdrop-PRRj70IN.js";import"./composite-BJNESzre.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./index-dezdEXRW.js";import"./useEventCallback-BpovZ0Ho.js";import"./SkeletonBar-CV5mZHb2.js";import"./LoadingCell-Ds62oVdJ.js";import"./ColumnConfigDialog-GH9qyALG.js";import"./DraggableList-DUD4w40C.js";import"./search-B8Q2SaYZ.js";import"./Input-CqMZoAkj.js";import"./useControlled-C5Efmt4q.js";import"./Button-ckHDf9dN.js";import"./small-cross-C_y-cV78.js";import"./ActionButton-BW0pCsIy.js";import"./Checkbox-C3tp-DrA.js";import"./useValueChanged-DciPxUCb.js";import"./CollapsiblePanel-DMdGItnd.js";import"./MultiColumnSortDialog-5vmbLhss.js";import"./MenuTrigger-PXVedLgF.js";import"./CompositeItem-D-n20gZA.js";import"./ToolbarRootContext-CPL7CHly.js";import"./getDisabledMountTransitionStyles-DQt5A1ew.js";import"./getPseudoElementBounds-BIQliNTO.js";import"./chevron-down-Lx8JbYiI.js";import"./index-D1daQUXJ.js";import"./error-4j4VkswI.js";import"./BaseCbacBanner-BUjt2BWO.js";import"./makeExternalStore-C86iDpxn.js";import"./Tooltip-LmdpxSyk.js";import"./PopoverPopup-CB4Z_i75.js";import"./debounce-BEqEgf8r.js";import"./useOsdkClient-jOrP_Hjl.js";import"./tick-BdYlxEi1.js";import"./DropdownField-CkS9IXqj.js";import"./isEqual-i8n36zat.js";import"./withOsdkMetrics-D_vYT_n9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
