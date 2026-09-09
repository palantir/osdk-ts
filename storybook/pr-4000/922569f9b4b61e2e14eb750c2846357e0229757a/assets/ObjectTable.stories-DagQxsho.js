import{j as i}from"./iframe-BBZCzStV.js";import{O as p}from"./object-table-DapV3Rol.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dar-yLib.js";import"./preload-helper-5SQDyWdl.js";import"./Table-fxlaPCGo.js";import"./index-B0mBcXI4.js";import"./Dialog-B-85Rx-2.js";import"./cross-CPvMVENn.js";import"./svgIconContainer-DfBgJD9-.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./InternalBackdrop-B_1kGoJ6.js";import"./composite-CFasADcm.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./index-Csh22FK0.js";import"./useEventCallback-C7wdVJUu.js";import"./SkeletonBar-Dh6u025G.js";import"./LoadingCell-CXYGJFXm.js";import"./ColumnConfigDialog-CV8tcLtB.js";import"./DraggableList-ed1YuQHx.js";import"./search-vc9aoGpm.js";import"./Input-CSnQRyFu.js";import"./useControlled-DoPklQtk.js";import"./Button-CfbDmY7F.js";import"./small-cross-DTHtoiVl.js";import"./ActionButton-NPe1j-Pf.js";import"./Checkbox-BBvJmZ_C.js";import"./useValueChanged-DDicrYhc.js";import"./CollapsiblePanel-DRW0CG7D.js";import"./MultiColumnSortDialog-uU-I92Wo.js";import"./MenuTrigger-CcvPK_Ol.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./getDisabledMountTransitionStyles-p7s1v2Wq.js";import"./getPseudoElementBounds-CGyVBiW9.js";import"./chevron-down-CMFHrqJp.js";import"./index-DbFsgQOw.js";import"./error-DTmGvXOz.js";import"./BaseCbacBanner-CQos4IsY.js";import"./makeExternalStore-C0iVHY1V.js";import"./Tooltip-CIld4EMB.js";import"./PopoverPopup-Ct6679Cx.js";import"./debounce-CV2RI2D0.js";import"./useOsdkClient-qOAfm0EP.js";import"./tick-BCDmZou0.js";import"./DropdownField-CcyuWoJs.js";import"./isEqual-QmNJKBr8.js";import"./withOsdkMetrics-mfymYHOu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
