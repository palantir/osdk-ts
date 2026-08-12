import{j as i}from"./iframe-PSEd73NB.js";import{O as p}from"./object-table-BauwUNcJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BF5F881f.js";import"./preload-helper-1GV8hhoq.js";import"./Table-C0YuZXer.js";import"./index-NVpWWHhl.js";import"./Dialog-MZDogb2P.js";import"./cross-DUR72zJ7.js";import"./svgIconContainer-Cer1IrhT.js";import"./useBaseUiId-xie1JhLt.js";import"./InternalBackdrop-DG1XJnpw.js";import"./composite-DRmXisBv.js";import"./index-kUkNYXaQ.js";import"./index-wWSeiS7y.js";import"./index-DAn4NbPR.js";import"./useEventCallback-qZfLyktJ.js";import"./SkeletonBar-tG3H8eNG.js";import"./LoadingCell-CbeknuxE.js";import"./ColumnConfigDialog-FEyhs1Vz.js";import"./DraggableList-CfOztAY-.js";import"./search-B8xwdlL_.js";import"./Input-D8coZK1U.js";import"./useControlled-ClhVTb83.js";import"./isEqual-DF7oHHXu.js";import"./isObject-BD6MDXyd.js";import"./Button-BKvLONJz.js";import"./ActionButton-g4qvEX3R.js";import"./Checkbox-elD6WF1n.js";import"./useValueChanged-COybV5eL.js";import"./CollapsiblePanel-Btl2-0tw.js";import"./MultiColumnSortDialog-BCgaRTB0.js";import"./MenuTrigger-BRuhVcfw.js";import"./CompositeItem-BPO1Jify.js";import"./ToolbarRootContext-ny_fraWs.js";import"./getDisabledMountTransitionStyles-CqZEJFeQ.js";import"./getPseudoElementBounds-lNCMxxUh.js";import"./chevron-down-xnJkXJWa.js";import"./index-CTJJ11lg.js";import"./error-BrPsupgI.js";import"./BaseCbacBanner-6AJ0eUDo.js";import"./makeExternalStore-CvL344Sn.js";import"./Tooltip-CXouVh1f.js";import"./PopoverPopup-DTmbJh-5.js";import"./toNumber-vOfoPhGw.js";import"./useOsdkClient-BNYDjVK7.js";import"./tick-Bc_HPwZN.js";import"./DropdownField-Ci8hbPdx.js";import"./withOsdkMetrics-VXn3cz-B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
