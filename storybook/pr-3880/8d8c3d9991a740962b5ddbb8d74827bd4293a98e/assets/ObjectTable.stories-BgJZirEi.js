import{j as i}from"./iframe-CfXo_xGs.js";import{O as p}from"./object-table-BvqZ3CMp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ANd6khvk.js";import"./preload-helper-DICGDLzn.js";import"./Table-D607lmpx.js";import"./index-CnGqDH_i.js";import"./Dialog-BxTvGKLX.js";import"./cross-BJtxhdST.js";import"./svgIconContainer-BAtltPp3.js";import"./useBaseUiId-DtsL1qz-.js";import"./InternalBackdrop-Bz8Dw8Ib.js";import"./composite-DPZWJgUc.js";import"./index-B5L6vnyq.js";import"./index-8kojcasY.js";import"./index-DppFUAq0.js";import"./useEventCallback-CQY5FeQg.js";import"./SkeletonBar-Dou4RbGj.js";import"./LoadingCell-ys6iwyAU.js";import"./ColumnConfigDialog-BSDdqq1g.js";import"./DraggableList-QdOnTU-N.js";import"./search-khU-kTlh.js";import"./Input-6L5IGU13.js";import"./useControlled-zSImE_Ef.js";import"./Button-Ctf32UkD.js";import"./small-cross-qncZTNbn.js";import"./ActionButton-xvOEHwP5.js";import"./Checkbox-BcLi88Jr.js";import"./useValueChanged-NcxPg-on.js";import"./CollapsiblePanel-B97m10Lh.js";import"./MultiColumnSortDialog-B5w_sXlo.js";import"./MenuTrigger-D0jw3WCx.js";import"./CompositeItem-B8aCK6n2.js";import"./ToolbarRootContext-D_iTI7z6.js";import"./getDisabledMountTransitionStyles-lw59aPL7.js";import"./getPseudoElementBounds-DjC2xHva.js";import"./chevron-down-Bw0n8vBX.js";import"./index-Wx3Cvrm7.js";import"./error-DO1H2NAA.js";import"./BaseCbacBanner-DFO4Q86h.js";import"./makeExternalStore-BUEQbKkl.js";import"./Tooltip-7EqCRI09.js";import"./PopoverPopup-pGLd2R6N.js";import"./debounce-DI-ivBUV.js";import"./useOsdkClient-23LGP0yF.js";import"./tick-oAiLguH-.js";import"./DropdownField-DPZX800G.js";import"./isEqual-C5PNU0hp.js";import"./withOsdkMetrics-BfkC7ecP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
