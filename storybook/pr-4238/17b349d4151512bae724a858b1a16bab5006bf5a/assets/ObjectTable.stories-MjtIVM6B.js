import{j as i}from"./iframe-3DYs7LO7.js";import{O as p}from"./object-table-BfsItrmr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UB4DaJKx.js";import"./preload-helper-BDRkpYDH.js";import"./Table-s5fahLWh.js";import"./index-Dksq0QWW.js";import"./Dialog-BmuFHVtK.js";import"./cross-BiEQYoFR.js";import"./svgIconContainer-E5ErPZjm.js";import"./useBaseUiId-CeE4102D.js";import"./InternalBackdrop-CPdSJMpf.js";import"./composite-BCO-9Moa.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./index-CJTVlVv5.js";import"./useEventCallback-DwsRMbJG.js";import"./SkeletonBar-BfJniFPr.js";import"./LoadingCell-C8da80wj.js";import"./ColumnConfigDialog-CYE3ysbI.js";import"./DraggableList-C9SO0dZm.js";import"./search-D5yGPAlT.js";import"./Input-Bbtubjan.js";import"./useControlled-LDymMyjQ.js";import"./Button-Co786LuF.js";import"./small-cross-DdM0FPfO.js";import"./ActionButton-Cbyc9XzM.js";import"./Checkbox-BStnP9ea.js";import"./useValueChanged-BQpMrMLa.js";import"./CollapsiblePanel-DVs4UHLN.js";import"./MultiColumnSortDialog-Bvn13wQo.js";import"./MenuTrigger-BFaeTz7M.js";import"./CompositeItem-D-tb1HU0.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./getDisabledMountTransitionStyles-CfKy3gzP.js";import"./getPseudoElementBounds-RIT9EOF5.js";import"./chevron-down-DLvTPfQ9.js";import"./index-HJUPOpns.js";import"./error-B7nnIe8L.js";import"./BaseCbacBanner-Bopiba_z.js";import"./makeExternalStore-DOhtyVO-.js";import"./Tooltip-RwDgrf4M.js";import"./PopoverPopup-BfUZB0MB.js";import"./debounce-Dx93VxJF.js";import"./useOsdkClient-CWVCE7e7.js";import"./tick-lA4emHrS.js";import"./DropdownField-BfdPwUa1.js";import"./isEqual-DsvzyOCy.js";import"./withOsdkMetrics-Dte6-FPa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
