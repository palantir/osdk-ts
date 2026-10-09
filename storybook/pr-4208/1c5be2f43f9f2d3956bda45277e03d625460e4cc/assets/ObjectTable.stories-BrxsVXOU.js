import{j as i}from"./iframe-eOIbuNqJ.js";import{O as p}from"./object-table-B9N8IcN2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ccg_nyUx.js";import"./preload-helper-CgIJPkyR.js";import"./Table-DbkNuL-9.js";import"./index-Dk7CsQL8.js";import"./Dialog-Bja5HFb2.js";import"./cross-BcLTDviE.js";import"./svgIconContainer-rhD8_llD.js";import"./useBaseUiId-BGt5np_k.js";import"./InternalBackdrop-uUv9MGMr.js";import"./composite-Bd6nPt4i.js";import"./index-DSnIaanU.js";import"./index-CFmwThG4.js";import"./index-904NSARe.js";import"./useEventCallback-WZf0a_bB.js";import"./SkeletonBar-BEmPZtKd.js";import"./LoadingCell-DP8CSwZh.js";import"./ColumnConfigDialog-D4KPwQM7.js";import"./DraggableList-Dh1kMlcW.js";import"./search-sJO-f4KO.js";import"./Input-Dseoi2Bs.js";import"./useControlled-D-af9sp-.js";import"./Button-mtLpgF2-.js";import"./small-cross-CTDjsytU.js";import"./ActionButton-C40yhSRc.js";import"./Checkbox-D-EAJqyP.js";import"./useValueChanged-Cyy6383A.js";import"./CollapsiblePanel-Cfs2diUt.js";import"./MultiColumnSortDialog-bWpTSf1H.js";import"./MenuTrigger-5Qse9-wJ.js";import"./CompositeItem-CilfwKya.js";import"./ToolbarRootContext-D7liU5HL.js";import"./getDisabledMountTransitionStyles-BebC4cTU.js";import"./getPseudoElementBounds-CstG7_ji.js";import"./chevron-down-BTesjy4Z.js";import"./index-CCzJD3Mm.js";import"./error-DBxXNUf_.js";import"./BaseCbacBanner-CWHdKSS8.js";import"./makeExternalStore-DO8UH6Jn.js";import"./Tooltip-DuWPukYN.js";import"./PopoverPopup-DVnqpSim.js";import"./debounce-DuqXkYiy.js";import"./useOsdkClient-D-YKzOkS.js";import"./tick-B8P9ON5a.js";import"./DropdownField-DVCiuc26.js";import"./isEqual-DChFwswX.js";import"./withOsdkMetrics-DMw3oRZ7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
