import{j as i}from"./iframe-B5Ajdn-Z.js";import{O as p}from"./object-table-3ayvbDRz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWqQDFjg.js";import"./preload-helper-B5yP3JPh.js";import"./Table-Bccy-Hkd.js";import"./index-DILEzbbv.js";import"./Dialog-CUJu7QaY.js";import"./cross-BBK4wgqQ.js";import"./svgIconContainer-DoY_K777.js";import"./useBaseUiId-C1Uihcd0.js";import"./InternalBackdrop-Cqris0fZ.js";import"./composite-CnqlIWYg.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./index-Cpe77fYH.js";import"./useEventCallback-B2QaC4UY.js";import"./SkeletonBar-Kw7gcQkG.js";import"./LoadingCell-DeDiXoLe.js";import"./ColumnConfigDialog-Xum0Hvj9.js";import"./DraggableList-Dwk2htXy.js";import"./search-BuV2lV03.js";import"./Input-BBXfcLrJ.js";import"./useControlled-UxmqIdoS.js";import"./Button-CF8mdfVJ.js";import"./small-cross-DPps9k0B.js";import"./ActionButton-BTL1_xvj.js";import"./Checkbox-CS9i4mqN.js";import"./useValueChanged-CifUOmFK.js";import"./CollapsiblePanel-Dt-j0qol.js";import"./MultiColumnSortDialog-D_wD-lKR.js";import"./MenuTrigger-Cy_7_0_z.js";import"./CompositeItem-CVzNQNnm.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./getDisabledMountTransitionStyles-D8H2JrcK.js";import"./getPseudoElementBounds-Bk-nLSGa.js";import"./chevron-down-BAJRL46i.js";import"./index-xivGH17H.js";import"./error-DVp4qBBx.js";import"./BaseCbacBanner-BnTCPLBo.js";import"./makeExternalStore-2_jyxYjq.js";import"./Tooltip-Bhg5Xees.js";import"./PopoverPopup-BCkS-3aI.js";import"./debounce-DMWFSr1X.js";import"./useOsdkClient-B5semh5Y.js";import"./tick-B-THAU8k.js";import"./DropdownField-DrMdgMG0.js";import"./isEqual-DVVHwUtv.js";import"./withOsdkMetrics-Bk1GhbZz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
