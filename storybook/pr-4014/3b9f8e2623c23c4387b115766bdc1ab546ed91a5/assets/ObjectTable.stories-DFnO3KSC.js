import{j as i}from"./iframe-CJIAHpsc.js";import{O as p}from"./object-table-CwUXi6yg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ew3c81so.js";import"./preload-helper-6cWemOcr.js";import"./Table-D0rCsC0y.js";import"./index-BzlqDAfw.js";import"./Dialog-U3PPNzQj.js";import"./cross-D0IHJ6R4.js";import"./svgIconContainer-56SLvs0U.js";import"./useBaseUiId-DvojBwxI.js";import"./InternalBackdrop-C4MFPAsi.js";import"./composite-CFOr0BZu.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./index-CFmt81Rk.js";import"./useEventCallback-B1gWvbDg.js";import"./SkeletonBar-Dbp-LEnb.js";import"./LoadingCell-DNRrniXH.js";import"./ColumnConfigDialog-CDMrr0h-.js";import"./DraggableList-D3tJ5a8G.js";import"./search-Bfm8FcWQ.js";import"./Input-icqzcMB1.js";import"./useControlled-OjeTa2_t.js";import"./Button-B7ufGNzS.js";import"./small-cross-oWzWfK8v.js";import"./ActionButton-DVvDY0Pz.js";import"./Checkbox-DUM-1O-m.js";import"./useValueChanged-uNOI8JzK.js";import"./CollapsiblePanel-Dili79wA.js";import"./MultiColumnSortDialog-CHzBTx0p.js";import"./MenuTrigger-zbtqCKoD.js";import"./CompositeItem-Czysbmcp.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./getDisabledMountTransitionStyles-DKmwvZAI.js";import"./getPseudoElementBounds-DvGqkRSV.js";import"./chevron-down-TVEh7Z-q.js";import"./index-D7-FHl4f.js";import"./error-D5dqG5sm.js";import"./BaseCbacBanner-N61U2yaQ.js";import"./makeExternalStore-BCywNTfM.js";import"./Tooltip-CeGxYMTK.js";import"./PopoverPopup-DewRGdkh.js";import"./debounce-2inWENXP.js";import"./useOsdkClient-Cut5RvL3.js";import"./tick-hj5PgKj5.js";import"./DropdownField-CBRqM-61.js";import"./isEqual-glBRSill.js";import"./withOsdkMetrics-mHYGalWz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
