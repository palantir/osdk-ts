import{j as i}from"./iframe-Cd_V4KpW.js";import{O as p}from"./object-table-C4lb6IjE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-mBMbRH5-.js";import"./preload-helper-BvId2qNX.js";import"./Table-DTcTPhVX.js";import"./index-CKbN7xoE.js";import"./Dialog-Cnzzznkv.js";import"./cross-8_7TK-gx.js";import"./svgIconContainer-OdpcSH6M.js";import"./useBaseUiId-Cg6vBntQ.js";import"./InternalBackdrop-B-QnZGQH.js";import"./composite-BRFYp8ys.js";import"./index-B7pcEyRI.js";import"./index-fbmKYReH.js";import"./index-CRzlT-la.js";import"./useEventCallback-CY_99pR_.js";import"./SkeletonBar-D2_Y9R07.js";import"./LoadingCell-DF-kunBe.js";import"./ColumnConfigDialog-DTOgZZhJ.js";import"./DraggableList-uvVZOkam.js";import"./search-kv1GPHwR.js";import"./Input-BnvXsjz5.js";import"./useControlled-CHek0QKa.js";import"./Button-B2mzAnjv.js";import"./small-cross-D66utcYW.js";import"./ActionButton-eat6g3bK.js";import"./Checkbox-DC42b3iB.js";import"./useValueChanged-CPJhnvXb.js";import"./CollapsiblePanel-CvaPBsH3.js";import"./MultiColumnSortDialog-D3BD3vVQ.js";import"./MenuTrigger-CqdD1k-X.js";import"./CompositeItem-DZc7qyRg.js";import"./ToolbarRootContext-BLj_5vvK.js";import"./getDisabledMountTransitionStyles-BEVZ6IMz.js";import"./getPseudoElementBounds-CBW_NZlb.js";import"./chevron-down-DksiwaSO.js";import"./index-Paj9WnhS.js";import"./error-DeuwQWwL.js";import"./BaseCbacBanner-j4qkw37Y.js";import"./makeExternalStore-iWOM0D5L.js";import"./Tooltip-5gkTsU1u.js";import"./PopoverPopup-BnHPOSxW.js";import"./debounce-DCv4P7fq.js";import"./useOsdkClient-BUMyGwPD.js";import"./tick-eJRABlUb.js";import"./DropdownField-MmnLozo5.js";import"./isEqual-B-I72i7y.js";import"./withOsdkMetrics-i_JOH502.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
