import{j as i}from"./iframe-CEjFXQ7i.js";import{O as p}from"./object-table-DSkg1M1h.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-f8N58gNV.js";import"./preload-helper-DLeq1RMI.js";import"./Table-B9fOVtho.js";import"./index-D6JFDMhk.js";import"./Dialog-DzFXgghC.js";import"./cross-D6CNu_FK.js";import"./svgIconContainer-BmnNwyNQ.js";import"./useBaseUiId-DIsNXkIK.js";import"./InternalBackdrop-cEsiiajq.js";import"./composite-YofervN4.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./index-D4xdv--D.js";import"./useEventCallback-DO0KrF-A.js";import"./SkeletonBar-DT9hE4gv.js";import"./LoadingCell-D85PK5AJ.js";import"./ColumnConfigDialog-D46zVtcj.js";import"./DraggableList-BZyIdZBv.js";import"./search-BURF39r2.js";import"./Input-CyL2x7p2.js";import"./useControlled-Bactb4pm.js";import"./Button-4xVurfNi.js";import"./small-cross-OzagSQJN.js";import"./ActionButton-ChX-Jzpd.js";import"./Checkbox-C7AiSlR0.js";import"./useValueChanged-BcDYkwEW.js";import"./CollapsiblePanel-fy30LupE.js";import"./MultiColumnSortDialog-DtTQpKwf.js";import"./MenuTrigger-JipuUt4m.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./getDisabledMountTransitionStyles-CCQ6XSw9.js";import"./getPseudoElementBounds-CVu5NcY5.js";import"./chevron-down-B26wW5MT.js";import"./index-Dwcp4INV.js";import"./error-Bcog9g9V.js";import"./BaseCbacBanner-CprDDsaN.js";import"./makeExternalStore-79RiVGfc.js";import"./Tooltip-BN52KZ5N.js";import"./PopoverPopup-2vrtL-xw.js";import"./debounce-CTnh9aDY.js";import"./useOsdkClient-CvwDornw.js";import"./tick-lx03iSJA.js";import"./DropdownField-vSNq3qus.js";import"./isEqual-D3NHAHrR.js";import"./withOsdkMetrics-DOR5d9wI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
