import{j as i}from"./iframe-DRtOcaPG.js";import{O as p}from"./object-table-BCfwSR0a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIL1r3qA.js";import"./preload-helper-9DgHanXn.js";import"./Table-D8C_QUcD.js";import"./index-Ce2dl65O.js";import"./Dialog-6XlLOHmL.js";import"./cross-BX3J5cVV.js";import"./svgIconContainer-DpZEtLv9.js";import"./useBaseUiId-BGBZ1HUg.js";import"./InternalBackdrop-DEWb66um.js";import"./composite-N79hpvK_.js";import"./index-DHqOpqOn.js";import"./index-D8e0XOwM.js";import"./index-B1juJX5y.js";import"./useEventCallback-KpeXCugf.js";import"./SkeletonBar-Bn8psVV6.js";import"./LoadingCell-TIEVW5Z1.js";import"./ColumnConfigDialog-BoPwK1_S.js";import"./DraggableList-BLdMLrLx.js";import"./search-Dtkc2Iz5.js";import"./Input-QNUGF4Iu.js";import"./useControlled-BcvbWefU.js";import"./Button-CK6d5OG4.js";import"./small-cross-DcKEL8t4.js";import"./ActionButton-D4k0Ykwf.js";import"./Checkbox-BIE_uDYH.js";import"./useValueChanged-BDN_9EGE.js";import"./CollapsiblePanel-Dny0UpIl.js";import"./MultiColumnSortDialog-tRhI4Szy.js";import"./MenuTrigger-cVWNdQTi.js";import"./CompositeItem-DWL2WPXo.js";import"./ToolbarRootContext-B6bPz9D9.js";import"./getDisabledMountTransitionStyles-BJl-4ZY_.js";import"./getPseudoElementBounds-Dwgu6l1I.js";import"./chevron-down-SYe_Fp71.js";import"./index-Bi5AS5V_.js";import"./error-BkqrjqGY.js";import"./BaseCbacBanner-CS1xI85h.js";import"./makeExternalStore-Ch0Jbi30.js";import"./Tooltip-xjkYLVuc.js";import"./PopoverPopup-CNH5KUV5.js";import"./debounce-1FOPDn_n.js";import"./useOsdkClient-DR_uLwOS.js";import"./tick-DoLa9jip.js";import"./DropdownField-BVBUpAg_.js";import"./isEqual-DydWlIf1.js";import"./withOsdkMetrics-DDwhyEqf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
