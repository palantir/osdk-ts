import{j as i}from"./iframe-CUxo3m6Y.js";import{O as p}from"./object-table-BS58DboR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-p22NBVeA.js";import"./preload-helper-l6s3tcls.js";import"./Table-qL21JEKz.js";import"./index-DTuBVR6H.js";import"./Dialog-uyxpEbmE.js";import"./cross-BrW7tcZq.js";import"./svgIconContainer-CNkl-Wwt.js";import"./useBaseUiId-Cfk1xeZo.js";import"./InternalBackdrop-CXN_RL2H.js";import"./composite-QDblzbOe.js";import"./index-CDPyuaTW.js";import"./index-DKD0s-Lm.js";import"./index-CxjaSFPP.js";import"./useEventCallback-BBqjvofg.js";import"./SkeletonBar-CR7zsgrH.js";import"./LoadingCell-DDQm7hjH.js";import"./ColumnConfigDialog-588ltJBa.js";import"./DraggableList-CjixxHVo.js";import"./search-C5XD9rFV.js";import"./Input-n5RT_2o8.js";import"./useControlled-CW8X9itX.js";import"./Button-Bp7sJ37u.js";import"./small-cross-hdXmMZce.js";import"./ActionButton-Ct3Qs2F9.js";import"./Checkbox-BnFqe7-w.js";import"./useValueChanged-IyyMTw5T.js";import"./CollapsiblePanel-3fNyZBpC.js";import"./MultiColumnSortDialog-B6xXiDA_.js";import"./MenuTrigger-5HtqAP9x.js";import"./CompositeItem-BVjd-TkC.js";import"./ToolbarRootContext-CJO8_3PY.js";import"./getDisabledMountTransitionStyles-BjaR6nL7.js";import"./getPseudoElementBounds-DRWqtKnl.js";import"./chevron-down-BOa4nBg1.js";import"./index-BEOdQoLT.js";import"./error-D3zX7u9C.js";import"./BaseCbacBanner-D4YJPV0D.js";import"./makeExternalStore-D-euk5kW.js";import"./Tooltip-CvOvAKov.js";import"./PopoverPopup-DCQkL0P-.js";import"./debounce-CUJDM8i3.js";import"./useOsdkClient-Du0bLm1o.js";import"./tick-BGs9034q.js";import"./DropdownField-BfLkyoOe.js";import"./isEqual-pGl1yIuH.js";import"./withOsdkMetrics-CSx29j57.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
