import{j as i}from"./iframe-1dJaCYlm.js";import{O as p}from"./object-table-DHPjy5yk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJplF3t0.js";import"./preload-helper-DxSOn4L7.js";import"./Table-CBTIAnhX.js";import"./index-B5nbKv82.js";import"./Dialog-DR5BuBZq.js";import"./cross-YjWLpu8J.js";import"./svgIconContainer-BHSx6W0Z.js";import"./useBaseUiId-C4uZnOHm.js";import"./InternalBackdrop-Dgfuakv5.js";import"./composite-L8QPO2DT.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./index-C7xGCqhv.js";import"./useEventCallback-DUPF2gzl.js";import"./SkeletonBar-D250oLk_.js";import"./LoadingCell-CRn8uGI3.js";import"./ColumnConfigDialog-CjGlgYSo.js";import"./DraggableList-DWAuUQtO.js";import"./search-BkPLkzDr.js";import"./Input-CIfB9akU.js";import"./useControlled-CHSiaIM9.js";import"./Button-C4vq1MKj.js";import"./small-cross-BJKO5x2i.js";import"./ActionButton-CAA2JXXL.js";import"./Checkbox-CpxF8gm9.js";import"./useValueChanged-mwlCE8cl.js";import"./CollapsiblePanel-Co1-lWcX.js";import"./MultiColumnSortDialog-Ci0pmQFw.js";import"./MenuTrigger-B9qIjPTc.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./getDisabledMountTransitionStyles-DWnTx_mX.js";import"./getPseudoElementBounds-wNHBeRCJ.js";import"./chevron-down-CFBQ0zoB.js";import"./index-DIXb6m2-.js";import"./error-BHBv4jub.js";import"./BaseCbacBanner-hVlrMvZb.js";import"./makeExternalStore-P9a4XRGC.js";import"./Tooltip-B8lT1fcQ.js";import"./PopoverPopup-jAP8Jjj3.js";import"./debounce-D-qHnft_.js";import"./useOsdkClient-DRXMsfLX.js";import"./tick-CIW2Y4rB.js";import"./DropdownField-DPzSkJ64.js";import"./isEqual-B31_2uq-.js";import"./withOsdkMetrics-H4WNoQWX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
