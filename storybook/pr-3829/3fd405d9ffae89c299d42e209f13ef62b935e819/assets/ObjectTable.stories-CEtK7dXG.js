import{j as i}from"./iframe-85l92LuF.js";import{O as p}from"./object-table-C0GnWyPt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DtwRhBo8.js";import"./preload-helper-DoBjmup7.js";import"./Table-BnDs73HF.js";import"./index-BnAHZs62.js";import"./Dialog-C4vZ3GgX.js";import"./cross-DZhpzTXU.js";import"./svgIconContainer-9VtSpFHF.js";import"./useBaseUiId-CGJCIeBX.js";import"./InternalBackdrop-DbM0HmsH.js";import"./composite-CaqHqJ_a.js";import"./index-zU9OYY3O.js";import"./index-OfsSx2G7.js";import"./index-DM4Gegry.js";import"./useEventCallback-DXmG8K1Y.js";import"./SkeletonBar-CWeveXAy.js";import"./LoadingCell-B3KBO1t6.js";import"./ColumnConfigDialog-C5kNLuT3.js";import"./DraggableList-DYFgJu_P.js";import"./search-HhZWfkPx.js";import"./Input-Bs9FOxx_.js";import"./useControlled-D-3f0MFO.js";import"./isEqual-DSvlbf0L.js";import"./isObject-Doo8UJXv.js";import"./Button-C177onMO.js";import"./ActionButton-DRuDmXXC.js";import"./Checkbox-Cf9AR_dN.js";import"./useValueChanged-KsIwXjTG.js";import"./CollapsiblePanel-726yqMtN.js";import"./MultiColumnSortDialog-psYjQqrg.js";import"./MenuTrigger-u-yWNfeM.js";import"./CompositeItem-B2i1pVuI.js";import"./ToolbarRootContext-Bi6RhBRT.js";import"./getDisabledMountTransitionStyles-BaxpKOOx.js";import"./getPseudoElementBounds-DyArnjjm.js";import"./chevron-down-UflpNh7y.js";import"./index-BPWj9FJk.js";import"./error-Cj2vyR90.js";import"./BaseCbacBanner-g8nywgDC.js";import"./makeExternalStore-WSruEEDk.js";import"./Tooltip-cHdPf_B7.js";import"./PopoverPopup-CG85ep_B.js";import"./toNumber-Cs7eH4rR.js";import"./useOsdkClient-C2cGCo7o.js";import"./tick-BCKGptbI.js";import"./DropdownField-BpqvP_BY.js";import"./withOsdkMetrics-SMjq4TP8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
