import{j as i}from"./iframe-DJYB1qk1.js";import{O as p}from"./object-table-CnQonoY8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQW_yraf.js";import"./preload-helper-DtuV8K9F.js";import"./Table-B90HPOGg.js";import"./index-DonW1mkl.js";import"./Dialog-DPxIre9H.js";import"./cross-Bpub1NfR.js";import"./svgIconContainer-BbsWyzEj.js";import"./useBaseUiId-DL-SGNBR.js";import"./InternalBackdrop-eBfWZ-MD.js";import"./composite-CC6F0Qsz.js";import"./index-D8Ycj_o4.js";import"./index-Ca9Z72uB.js";import"./index-CvaTYoMt.js";import"./useEventCallback-uzRZFC7Y.js";import"./SkeletonBar-BLD3bcxm.js";import"./LoadingCell-Dgc9EthY.js";import"./ColumnConfigDialog-DeLr0uma.js";import"./DraggableList-MrlrcOkU.js";import"./search-5CkafOxN.js";import"./Input-1LkIvDzf.js";import"./useControlled-oyOM-Xp0.js";import"./isEqual-CewC2dRg.js";import"./isObject-CljKLLYD.js";import"./Button-Duzr31W4.js";import"./ActionButton-4WynwJXW.js";import"./Checkbox-D-pUxlIv.js";import"./useValueChanged-DbwZIZqR.js";import"./CollapsiblePanel-CKCvm0v6.js";import"./MultiColumnSortDialog-DJ_irqfG.js";import"./MenuTrigger-HGLe02pf.js";import"./CompositeItem-CUawBViA.js";import"./ToolbarRootContext-CV2B82ef.js";import"./getDisabledMountTransitionStyles-bi6UcqkV.js";import"./getPseudoElementBounds-qT7EHfZ1.js";import"./chevron-down-BBFBeDj_.js";import"./index-C2FWrg77.js";import"./error-BpmsLSMo.js";import"./BaseCbacBanner-B5alV3yj.js";import"./makeExternalStore-CkRVjc78.js";import"./Tooltip-CPTKLQ5G.js";import"./PopoverPopup-CyeyM8PS.js";import"./toNumber-CNd-iZ3r.js";import"./useOsdkClient-BLf8vx4g.js";import"./tick-BQV3GL8y.js";import"./DropdownField-CLncidES.js";import"./withOsdkMetrics-B_Dkj_nQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
