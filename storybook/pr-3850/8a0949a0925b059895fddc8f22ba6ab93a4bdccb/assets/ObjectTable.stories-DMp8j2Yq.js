import{j as i}from"./iframe-BAHulxpJ.js";import{O as p}from"./object-table-CNB57-cJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcZ0_Kz0.js";import"./preload-helper-5aV3zbER.js";import"./Table-CxL2p-Va.js";import"./index-BQXofWlU.js";import"./Dialog-B6iU_o4S.js";import"./cross-B9q1-ifJ.js";import"./svgIconContainer-Cm-IMBSr.js";import"./useBaseUiId-4VVoMa3J.js";import"./InternalBackdrop-CRYKoqsR.js";import"./composite-CNE1JcBa.js";import"./index-DoA2rgK3.js";import"./index-WmCUx70V.js";import"./index-C5Lb6-VW.js";import"./useEventCallback-DpFCqp0u.js";import"./SkeletonBar-C0G3PmlI.js";import"./LoadingCell-C0BQjoN8.js";import"./ColumnConfigDialog-BiAKAKR-.js";import"./DraggableList-Y69Q8-LB.js";import"./search-OXklcGGP.js";import"./Input-BrRAx9lQ.js";import"./useControlled-DIFuATpA.js";import"./isEqual-ZCjsuvSA.js";import"./isObject-WPnHXGM7.js";import"./Button-CQQZwN_7.js";import"./ActionButton-BpQl9awy.js";import"./Checkbox-BfpNu74p.js";import"./useValueChanged-CJW4fpp5.js";import"./CollapsiblePanel-CoqkMeOl.js";import"./MultiColumnSortDialog-B8lY0q26.js";import"./MenuTrigger-CB6VXfFB.js";import"./CompositeItem-CzEEDLGh.js";import"./ToolbarRootContext-D5ZmFT_T.js";import"./getDisabledMountTransitionStyles-CoaV92BZ.js";import"./getPseudoElementBounds-4MRkHXcX.js";import"./chevron-down-pYaR9_5X.js";import"./index-B0GpXZaG.js";import"./error-CcsT2Wai.js";import"./BaseCbacBanner-DT8aZfxT.js";import"./makeExternalStore-Cb1RY-_V.js";import"./Tooltip-Tx9hRxwB.js";import"./PopoverPopup-DyAxudiR.js";import"./toNumber-DqdJyyKm.js";import"./useOsdkClient-BAgJREz7.js";import"./tick-BDvW4uz3.js";import"./DropdownField-msHCB7CJ.js";import"./withOsdkMetrics-Bp9A7LOQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
