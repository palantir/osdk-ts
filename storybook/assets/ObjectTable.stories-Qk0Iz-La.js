import{j as i}from"./iframe-DYtUFfpV.js";import{O as p}from"./object-table-CHj9aW6t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--ejZM7IN.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-exNfje.js";import"./index-B_B03ZgQ.js";import"./Dialog-sifnIZBJ.js";import"./cross-BnbnB9qW.js";import"./svgIconContainer-DFzm68WI.js";import"./useBaseUiId-DGMDSr1w.js";import"./InternalBackdrop-Cq3aXNy6.js";import"./composite-5PJSFBR3.js";import"./index-ByCETvNt.js";import"./index-DLk7paK9.js";import"./index-Dh6PcIHr.js";import"./useEventCallback-DGyohyoy.js";import"./SkeletonBar-tfS1beTf.js";import"./LoadingCell-BEHbwI_i.js";import"./ColumnConfigDialog-Zd1CPmCy.js";import"./DraggableList-ZaDVBZ2K.js";import"./search-DZ2fRThm.js";import"./Input-Rz5gB3-F.js";import"./useControlled-CTXIF64s.js";import"./Button-CBBF9I1J.js";import"./small-cross-DUMNP9nm.js";import"./ActionButton-gd9T6Q6m.js";import"./Checkbox-BgMpsQG8.js";import"./useValueChanged-BXTPeGrG.js";import"./CollapsiblePanel-DsmHbGwh.js";import"./MultiColumnSortDialog-DzoZtfQh.js";import"./MenuTrigger--IiolMwr.js";import"./CompositeItem-BjuvjbZw.js";import"./ToolbarRootContext-DcFxLx-B.js";import"./getDisabledMountTransitionStyles-BbPZ6Y-H.js";import"./getPseudoElementBounds-BIAPaGxa.js";import"./chevron-down-tphWLm1B.js";import"./index-DYE6Durp.js";import"./error-B2G3Ssl-.js";import"./BaseCbacBanner-cm8XduCf.js";import"./makeExternalStore-ByCDRZNg.js";import"./Tooltip-BlCaFm9g.js";import"./PopoverPopup-DZoDE-qB.js";import"./debounce-DoOyh8jW.js";import"./useOsdkClient-BdXrEp_e.js";import"./tick-C7X186oI.js";import"./DropdownField-0kxHenat.js";import"./isEqual-CGtQ-Eza.js";import"./withOsdkMetrics-CSoHl_un.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
