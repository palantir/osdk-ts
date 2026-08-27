import{j as i}from"./iframe-j16wUfsG.js";import{O as p}from"./object-table-BCkM1bv0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9ZP3Cza.js";import"./preload-helper-B5KNJanK.js";import"./Table-DUtbUPZe.js";import"./index-PZXuwR22.js";import"./Dialog-Ba90sm6K.js";import"./cross-hlLbslg_.js";import"./svgIconContainer-DyYG3yIN.js";import"./useBaseUiId-BT4BDOeF.js";import"./InternalBackdrop-CDEbkKEG.js";import"./composite-B2eetiSQ.js";import"./index-BBXEyrHX.js";import"./index-BKBAw2oy.js";import"./index-DTWb0ngO.js";import"./useEventCallback-ryqefgdq.js";import"./SkeletonBar-D7pRmDQH.js";import"./LoadingCell-CHsb-nzQ.js";import"./ColumnConfigDialog-ERHE9gvP.js";import"./DraggableList-cVSW0vVW.js";import"./search-BeO1HXe9.js";import"./Input-ChvjdPlR.js";import"./useControlled-DFdkoakd.js";import"./Button-BsHl7luh.js";import"./small-cross-C0ihpIaZ.js";import"./ActionButton-DswyMU6B.js";import"./Checkbox-wSboXymt.js";import"./useValueChanged-CO-asJqE.js";import"./CollapsiblePanel-Cmv4sQtD.js";import"./MultiColumnSortDialog-C8l1RJoW.js";import"./MenuTrigger-BEOUTCDD.js";import"./CompositeItem-BYEj7bp3.js";import"./ToolbarRootContext-DOjYoz5M.js";import"./getDisabledMountTransitionStyles-_4E5aWO0.js";import"./getPseudoElementBounds-qqBqkqSW.js";import"./chevron-down-CPDFF9dW.js";import"./index-Soy9Caj3.js";import"./error-DyJKKGYF.js";import"./BaseCbacBanner-DW3GIQns.js";import"./makeExternalStore-CIGBfPKm.js";import"./Tooltip-CmOBTmaj.js";import"./PopoverPopup-CtZcaNrD.js";import"./debounce-BCylpfiq.js";import"./useOsdkClient-CHpRljBm.js";import"./tick-BvU0208f.js";import"./DropdownField-CtNMPrH-.js";import"./isEqual-D44AHoS1.js";import"./withOsdkMetrics-DopDBPQL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
