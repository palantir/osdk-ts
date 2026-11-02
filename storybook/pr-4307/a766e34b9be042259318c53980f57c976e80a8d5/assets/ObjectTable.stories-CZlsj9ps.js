import{j as i}from"./iframe-DeBKMUKb.js";import{O as p}from"./object-table-CHt2U_74.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BhDef8KI.js";import"./preload-helper-DtsY9CO2.js";import"./Table-CQ68RVLx.js";import"./index-CSt4SVDo.js";import"./Dialog-DdkCZCI1.js";import"./cross-BJHF5Gx6.js";import"./svgIconContainer-O2AZIUYH.js";import"./useBaseUiId-gjqV4iyZ.js";import"./InternalBackdrop-BfIGilFA.js";import"./composite-CmHTi2sT.js";import"./index-CPngYotl.js";import"./index-Ch6RGO_N.js";import"./index-_vLIc9r1.js";import"./useEventCallback-DgJERIqa.js";import"./SkeletonBar-4gyG0MaM.js";import"./LoadingCell-BHmA_kTX.js";import"./ColumnConfigDialog-COalgmqy.js";import"./DraggableList-BwnxcEbf.js";import"./search-nMx4jBID.js";import"./Input-DiiDZzec.js";import"./useControlled-Cz39Exnz.js";import"./Button-UgQJdLdU.js";import"./small-cross-DF_WxFTT.js";import"./ActionButton-CYaNQ1cM.js";import"./Checkbox-aMR4zvgX.js";import"./useValueChanged-CDAPz_Xc.js";import"./CollapsiblePanel-DrVw8HP_.js";import"./MultiColumnSortDialog-rzrfB_Oa.js";import"./MenuTrigger-BzEp1szS.js";import"./CompositeItem-DxScAMY-.js";import"./ToolbarRootContext-FIq2uNrn.js";import"./getDisabledMountTransitionStyles-75KemxOF.js";import"./getPseudoElementBounds-C2LoIYA3.js";import"./chevron-down-9YGLxBlF.js";import"./index-DwmniFco.js";import"./error-N6V_Mqjh.js";import"./BaseCbacBanner-CeU4EU63.js";import"./makeExternalStore-tOV9_u_X.js";import"./Tooltip-DGFOPRJX.js";import"./PopoverPopup-D_7crJdL.js";import"./debounce-BBaNzBPC.js";import"./useOsdkClient-DaMq1XGG.js";import"./tick-CiGN0ZZM.js";import"./DropdownField-DgQP5JXr.js";import"./isEqual-DxVuaeab.js";import"./withOsdkMetrics-Cw8Hicid.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
