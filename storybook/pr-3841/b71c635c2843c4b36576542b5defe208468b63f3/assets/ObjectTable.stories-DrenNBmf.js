import{j as i}from"./iframe-B-YGlnkZ.js";import{O as p}from"./object-table-DxphktV8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWclhzIz.js";import"./preload-helper-CtVpadX7.js";import"./Table-0NdccKwG.js";import"./index-BwbxpG9V.js";import"./Dialog-CJCDpIaI.js";import"./cross-Cxuf4ocZ.js";import"./svgIconContainer-ur9r5SLx.js";import"./useBaseUiId-H-3YJ5Rw.js";import"./InternalBackdrop-Ce_XWd_Q.js";import"./composite-Dqyj-RK-.js";import"./index-B6aw-_Dz.js";import"./index-BOs-qFJy.js";import"./index-YMqDUVbD.js";import"./useEventCallback-D17bhAXF.js";import"./SkeletonBar-CzDhRjqu.js";import"./LoadingCell-DtuuL7qi.js";import"./ColumnConfigDialog-BTqSDIGX.js";import"./DraggableList-lM9X_JRz.js";import"./search-DXsdMEbr.js";import"./Input-DaqHwlu0.js";import"./useControlled-DdFFxVnf.js";import"./Button-BxSaRA57.js";import"./small-cross-C4G_4bm0.js";import"./ActionButton-DPJ_lqmP.js";import"./Checkbox-CuYAlfwy.js";import"./useValueChanged-BrDu_oCw.js";import"./CollapsiblePanel-CvgPh7ET.js";import"./MultiColumnSortDialog-DZ0Aajud.js";import"./MenuTrigger-CfE9QubM.js";import"./CompositeItem-BE3XYcA2.js";import"./ToolbarRootContext-CnbQ5y9z.js";import"./getDisabledMountTransitionStyles-Dh82TnbN.js";import"./getPseudoElementBounds-B0PDl1uq.js";import"./chevron-down-G62k-E5h.js";import"./index-CQIVASoN.js";import"./error-CFJFAjZO.js";import"./BaseCbacBanner-BIrCXw3Z.js";import"./makeExternalStore-DLMtLoe9.js";import"./Tooltip-Tqm6OBEx.js";import"./PopoverPopup-ugp2aSv8.js";import"./debounce-BjzkkvaB.js";import"./useOsdkClient-gj8ttqqj.js";import"./tick-D0iG3kes.js";import"./DropdownField-ClrxV16v.js";import"./isEqual-DlaFj127.js";import"./withOsdkMetrics-Bw9hmnsv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
