import{j as i}from"./iframe-CdZ1-8VD.js";import{O as p}from"./object-table-DDvSb5Kt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8dnR-7PV.js";import"./preload-helper-BfsuwAVK.js";import"./Table-C3-BZLyv.js";import"./index-DyOp5UTf.js";import"./Dialog-BVsM3nhX.js";import"./cross-D0Gcop_x.js";import"./svgIconContainer-BzSPbIbT.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./InternalBackdrop-BIdMsz61.js";import"./composite-DXQ2UI8x.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./index-CXL10vF5.js";import"./useEventCallback-Cu7C16-m.js";import"./SkeletonBar-8SPBEh-g.js";import"./LoadingCell-DAfUInab.js";import"./ColumnConfigDialog-C9RPYwH1.js";import"./DraggableList-DEKgyEc5.js";import"./search-BZxjL_1A.js";import"./Input-KSBtG81T.js";import"./useControlled-U2uKb9nR.js";import"./Button-Bt5t_54D.js";import"./small-cross-DR7ny8zU.js";import"./ActionButton-Cru8Qy-m.js";import"./Checkbox-R3-afLLJ.js";import"./useValueChanged-C1GpysCg.js";import"./CollapsiblePanel-CFarmLG5.js";import"./MultiColumnSortDialog-h-aCTogI.js";import"./MenuTrigger-_in--5sv.js";import"./CompositeItem-yiTSbTdQ.js";import"./ToolbarRootContext-2AFAS280.js";import"./getDisabledMountTransitionStyles-BI1VlBVA.js";import"./getPseudoElementBounds-BdSlNVkb.js";import"./chevron-down-ElNoZV5X.js";import"./index-BDrIE1q3.js";import"./error-C5_AkzgF.js";import"./BaseCbacBanner-BNo88gI0.js";import"./makeExternalStore-xgvF_Gz5.js";import"./Tooltip-DhGkKgsN.js";import"./PopoverPopup-DXgfGfh3.js";import"./debounce-mQD2mSjp.js";import"./useOsdkClient-8doQ3A6W.js";import"./tick-Ds5_YkYs.js";import"./DropdownField-D6ZvZlxb.js";import"./isEqual-jIhDHEUI.js";import"./withOsdkMetrics-Bjc_co0T.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
