import{j as i}from"./iframe-BYxEOIgJ.js";import{O as p}from"./object-table-ZGMv6O3p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CeL0FSRQ.js";import"./preload-helper-CYfeVk8W.js";import"./Table-BQsMFTl4.js";import"./index-DKKaubsW.js";import"./Dialog-9IDRR8Td.js";import"./cross-BIhLN6o-.js";import"./svgIconContainer-BEmlyg-y.js";import"./useBaseUiId-nfkORe0E.js";import"./InternalBackdrop-DNuz-SJQ.js";import"./composite-Cx4sqESm.js";import"./index-tQSEfkeh.js";import"./index-BOJvayi6.js";import"./index-DwnZeONY.js";import"./useEventCallback-Wzc0f3SD.js";import"./SkeletonBar-DkY0CIx2.js";import"./LoadingCell-CQeIxM7f.js";import"./ColumnConfigDialog-C0b_e5gr.js";import"./DraggableList-WHk-6vds.js";import"./search-D-odk6X_.js";import"./Input-DjFm0Vep.js";import"./useControlled-CUdaOkZq.js";import"./isEqual-BhWNui4X.js";import"./isObject-LQOhNoGU.js";import"./Button-BD1cn9XN.js";import"./ActionButton--q9fC4uz.js";import"./Checkbox-B2UQUxW9.js";import"./useValueChanged-Bdy5pI-C.js";import"./CollapsiblePanel-Cq48y23I.js";import"./MultiColumnSortDialog-CxLVk_VS.js";import"./MenuTrigger-Cj5R0CGN.js";import"./CompositeItem-DmtenJN8.js";import"./ToolbarRootContext-49DlEGV6.js";import"./getDisabledMountTransitionStyles-C9TiHE4J.js";import"./getPseudoElementBounds-C8ySOvtU.js";import"./chevron-down-CrQY9uCp.js";import"./index-DHS4kq0m.js";import"./error-Cj50jG_k.js";import"./BaseCbacBanner-DeIJCNJT.js";import"./makeExternalStore-MdKyv_9V.js";import"./Tooltip-BGdIr3DT.js";import"./PopoverPopup-BjEwSVm1.js";import"./toNumber-CMjVeBac.js";import"./useOsdkClient-CNrMQGxQ.js";import"./tick-C7W402bP.js";import"./DropdownField-DOymprAa.js";import"./withOsdkMetrics-C8n5_A-t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
