import{j as i}from"./iframe-DwvgFPBy.js";import{O as p}from"./object-table-CXKpt07o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BI3NWhmG.js";import"./preload-helper-CtrM-3nz.js";import"./Table-Cm0rz_NM.js";import"./index-ChfnPNU9.js";import"./Dialog-DLD-dzbs.js";import"./cross-C1oe8vnK.js";import"./svgIconContainer-BgKykxWQ.js";import"./useBaseUiId-CHF1IBcr.js";import"./InternalBackdrop-y3P75jrX.js";import"./composite-DuoDUKUH.js";import"./index-DUsIeEWR.js";import"./index-DngtPiIB.js";import"./index-Ci5_X35m.js";import"./useEventCallback-CIsii_JD.js";import"./SkeletonBar-Bn99OlYx.js";import"./LoadingCell-BRbaSXfJ.js";import"./ColumnConfigDialog-Dcl4ko7X.js";import"./DraggableList-DSK4wI_k.js";import"./search--SWXDnoj.js";import"./Input-DlFD1yhx.js";import"./useControlled-De5DdgKM.js";import"./Button-C57imQCz.js";import"./small-cross-DpGXyKJ4.js";import"./ActionButton-C-TLgUTf.js";import"./Checkbox-2PgC4d7Q.js";import"./useValueChanged-Bcki-2R3.js";import"./CollapsiblePanel-D7GWkiYF.js";import"./MultiColumnSortDialog-D1zVQuJa.js";import"./MenuTrigger-C-ZbLY8r.js";import"./CompositeItem-DAydT348.js";import"./ToolbarRootContext-CV_vZDG6.js";import"./getDisabledMountTransitionStyles-DtUQJxPB.js";import"./getPseudoElementBounds-CKc4TuSq.js";import"./chevron-down-OGN5YYQ1.js";import"./index-C2pnKJHd.js";import"./error-BqWzkB-Q.js";import"./BaseCbacBanner-DWENoj45.js";import"./makeExternalStore-DVeA--Ja.js";import"./Tooltip-C7bhQ5Z_.js";import"./PopoverPopup-CsviCyMF.js";import"./debounce-DnXDfGow.js";import"./useOsdkClient-iGOi41gt.js";import"./tick-BXa19xuR.js";import"./DropdownField-BidCZ1Wu.js";import"./isEqual-DFbmaofx.js";import"./withOsdkMetrics-qh2Z3PSD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
