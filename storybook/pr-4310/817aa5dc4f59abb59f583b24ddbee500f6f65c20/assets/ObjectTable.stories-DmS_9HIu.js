import{j as i}from"./iframe-DycPRZ3_.js";import{O as p}from"./object-table-cKA_tnl_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfIeQXrV.js";import"./preload-helper-CwFGYy97.js";import"./Table-BVNM11_C.js";import"./index-D8OuJnBD.js";import"./Dialog-BmRJa2Pg.js";import"./cross-BCqcqOvJ.js";import"./svgIconContainer-CdogxpvZ.js";import"./useBaseUiId-BcdZIsRg.js";import"./InternalBackdrop-C-dfpcw1.js";import"./composite-BS35o5ci.js";import"./index-DsXNa1nt.js";import"./index-CUewPl3I.js";import"./index-BL25K-TO.js";import"./useEventCallback-lJ2DHBKq.js";import"./SkeletonBar-C2Omcp_Q.js";import"./LoadingCell-DIBawpGj.js";import"./ColumnConfigDialog-DuHMsboc.js";import"./DraggableList-CueLlr79.js";import"./search-_YpI-rXF.js";import"./Input-DlxWReQQ.js";import"./useControlled-CSrl2eWz.js";import"./Button-BRZRYHG0.js";import"./small-cross-DHlLl8iv.js";import"./ActionButton-KL_G11f2.js";import"./Checkbox-hkMCRpsU.js";import"./useValueChanged-CoxCzpHk.js";import"./CollapsiblePanel-v1RS7AoO.js";import"./MultiColumnSortDialog-BHwBBth3.js";import"./MenuTrigger-Bi_nIbiQ.js";import"./CompositeItem-BFpto-ga.js";import"./ToolbarRootContext-O9iZr2zE.js";import"./getDisabledMountTransitionStyles-BL7UYAd-.js";import"./getPseudoElementBounds-Bp1o7LjX.js";import"./chevron-down-oahySAf9.js";import"./index-Cmvp_WNS.js";import"./error-CfB5jUCL.js";import"./BaseCbacBanner-DFjRHJFT.js";import"./makeExternalStore-Ko2ktWoV.js";import"./Tooltip-BkvL-duP.js";import"./PopoverPopup-CkUDMz4E.js";import"./debounce-BnD1fViJ.js";import"./useOsdkClient-DFeWJms6.js";import"./tick-Dro8bbOl.js";import"./DropdownField-XtF6381b.js";import"./isEqual-DymJ8cEu.js";import"./withOsdkMetrics-BKuNAfM3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
