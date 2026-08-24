import{j as i}from"./iframe-ClI_suoI.js";import{O as p}from"./object-table-Dc3bm7wL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D59CCQx8.js";import"./preload-helper-D0Vsi6i3.js";import"./Table-Do37un_W.js";import"./index-BOKiLQxP.js";import"./Dialog-QlvwO9cL.js";import"./cross-BQ8MM7XW.js";import"./svgIconContainer-CUHjWuFL.js";import"./useBaseUiId-Dc6nwPYL.js";import"./InternalBackdrop-BUi2iTEd.js";import"./composite-BJOTlA1D.js";import"./index-l7ila5kK.js";import"./index-BM0PuGji.js";import"./index-B1mNthSM.js";import"./useEventCallback-DVEB68OM.js";import"./SkeletonBar-D6U2O75A.js";import"./LoadingCell-chWRAdnb.js";import"./ColumnConfigDialog-Cmo1wVkn.js";import"./DraggableList-BKBY8rPP.js";import"./search-DE3wrgSm.js";import"./Input-DBdXXl4r.js";import"./useControlled-Blt5oj3t.js";import"./Button-COPur_kS.js";import"./small-cross-DWTE1D7g.js";import"./ActionButton-pbm-2r65.js";import"./Checkbox-S9UuBkvE.js";import"./useValueChanged-B3aVy-K-.js";import"./CollapsiblePanel-BMyuJGmo.js";import"./MultiColumnSortDialog-CF8In-U-.js";import"./MenuTrigger-BSLJomwL.js";import"./CompositeItem-BOlADeZN.js";import"./ToolbarRootContext-BRzHaDW7.js";import"./getDisabledMountTransitionStyles-CXvh3y62.js";import"./getPseudoElementBounds-Df-qZ214.js";import"./chevron-down-BZBtwvY3.js";import"./index-iFSHL4p3.js";import"./error-p2VRCnQK.js";import"./BaseCbacBanner-DV_F8c5m.js";import"./makeExternalStore-BDP9Ow_W.js";import"./Tooltip-DgpP4QJ4.js";import"./PopoverPopup-9ckP_Vcx.js";import"./debounce-DPHlWhp3.js";import"./useOsdkClient-B-EWrqMY.js";import"./tick-DSX_6FCY.js";import"./DropdownField-By-ew9Op.js";import"./useDebouncedCallback-CbNUArZs.js";import"./withOsdkMetrics-DG46gbmI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
