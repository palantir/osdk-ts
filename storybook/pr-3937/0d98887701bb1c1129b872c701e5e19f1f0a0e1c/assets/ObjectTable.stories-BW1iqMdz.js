import{j as i}from"./iframe-Bno8djo7.js";import{O as p}from"./object-table-nJ2m76fC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdTjqkwH.js";import"./preload-helper-DoyMSojG.js";import"./Table-BjCnq7GD.js";import"./index-Bp1l5rWD.js";import"./Dialog-DAQFqKel.js";import"./cross-QI68TLXt.js";import"./svgIconContainer-BnD58swH.js";import"./useBaseUiId-CysbO9z2.js";import"./InternalBackdrop-Cn5KziF1.js";import"./composite-DfMqUtsP.js";import"./index-CTCxNRd0.js";import"./index-zlVZaIXm.js";import"./index-CNSLgLDR.js";import"./useEventCallback-YcQVIhsi.js";import"./SkeletonBar-aqALnIxM.js";import"./LoadingCell-DVWiWlTZ.js";import"./ColumnConfigDialog-CUZw6o28.js";import"./DraggableList-B5fYxue1.js";import"./search-Cwwb_s2u.js";import"./Input-DbgwKTdL.js";import"./useControlled-c3pzkWI7.js";import"./Button-C9PyxqvP.js";import"./small-cross-CBEoJXlf.js";import"./ActionButton-DLiePIQg.js";import"./Checkbox-Rj4xDxF3.js";import"./useValueChanged-uylpe4Ux.js";import"./CollapsiblePanel-BI8YmfWp.js";import"./MultiColumnSortDialog-BXYA9Uwj.js";import"./MenuTrigger-UmNPDpZR.js";import"./CompositeItem-4hPgfCxC.js";import"./ToolbarRootContext-Dql3SctO.js";import"./getDisabledMountTransitionStyles-q13OTEOP.js";import"./getPseudoElementBounds-DHmOFePC.js";import"./chevron-down-DPAZwO7T.js";import"./index-CyXtkMiX.js";import"./error-DdObSOoZ.js";import"./BaseCbacBanner-DWR6ArJJ.js";import"./makeExternalStore-BAXThE2g.js";import"./Tooltip-CE0qB4Lt.js";import"./PopoverPopup-Ctz89BjB.js";import"./debounce-BUYNR-N5.js";import"./useOsdkClient-DzQFMUb8.js";import"./tick-Bq0tsPSN.js";import"./DropdownField-IPHIVFRE.js";import"./isEqual-CkJTtiCd.js";import"./withOsdkMetrics-DvUN-3xf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
