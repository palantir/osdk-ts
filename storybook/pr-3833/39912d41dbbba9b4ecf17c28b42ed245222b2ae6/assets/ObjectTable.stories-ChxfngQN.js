import{j as i}from"./iframe-Yz96DrPS.js";import{O as p}from"./object-table-C9CZSVN3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlQoeLXY.js";import"./preload-helper-DSFQiPJa.js";import"./Table-CGMnratr.js";import"./index-CA1nYKRZ.js";import"./Dialog-BsdhZ-e7.js";import"./cross-BL7_pA6T.js";import"./svgIconContainer-IHZKkt63.js";import"./useBaseUiId-Bc9L5zEM.js";import"./InternalBackdrop-CqHdaW_q.js";import"./composite-1RMje4bP.js";import"./index-DmVlcIuM.js";import"./index-D76oELgs.js";import"./index-9KFZRagp.js";import"./useEventCallback-C6xW0i3s.js";import"./SkeletonBar-DwqWqllh.js";import"./LoadingCell-KICmHti6.js";import"./ColumnConfigDialog-1mo1JJrV.js";import"./DraggableList-D2XGl1k6.js";import"./search-CxWHrvts.js";import"./Input-BRSvXeIv.js";import"./useControlled-khTqGeBT.js";import"./isEqual-SXKv2-Wb.js";import"./isObject-BC5vm0Dx.js";import"./Button-D4d_fs9b.js";import"./ActionButton-BOkv0UrP.js";import"./Checkbox-kbAY1eIe.js";import"./useValueChanged-CkRMjmpp.js";import"./CollapsiblePanel-B5BqE5nI.js";import"./MultiColumnSortDialog-05yqGdj8.js";import"./MenuTrigger-BxMx821b.js";import"./CompositeItem-CaVP6J8g.js";import"./ToolbarRootContext-k35ZWRp2.js";import"./getDisabledMountTransitionStyles-ygwefoAc.js";import"./getPseudoElementBounds-eFRwNGrO.js";import"./chevron-down-D2BRaLqM.js";import"./index-BobGwXvv.js";import"./error-D7GMvIdW.js";import"./BaseCbacBanner-CsYbWqLr.js";import"./makeExternalStore-BEyUkIfG.js";import"./Tooltip-CmLFGvq0.js";import"./PopoverPopup-ua-uP1ZY.js";import"./toNumber-Dw-8SHMn.js";import"./useOsdkClient-CZVm7tZv.js";import"./tick-DNnM64JX.js";import"./DropdownField-CWVsDrhE.js";import"./withOsdkMetrics-AzfXO0By.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
