import{j as i}from"./iframe-BTDvHL3g.js";import{O as p}from"./object-table-576gGb0G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5rb2IAj.js";import"./preload-helper-D9Z_UkK8.js";import"./Table-9TYSBCCH.js";import"./index-C2WocGyz.js";import"./Dialog-BQPrnvyl.js";import"./cross-Cp0W9YlM.js";import"./svgIconContainer-Dt86stim.js";import"./useBaseUiId-Ca42jcOp.js";import"./InternalBackdrop-DvugTWWQ.js";import"./composite-CR_T3dDP.js";import"./index-CtTeoyvV.js";import"./index-Cs7K0AYs.js";import"./index-CI1rDDbd.js";import"./useEventCallback-Djm2_lIv.js";import"./SkeletonBar-4ynmEfK8.js";import"./LoadingCell-BFOetmvd.js";import"./ColumnConfigDialog-5dKyG8cs.js";import"./DraggableList-BHPi9scr.js";import"./search-BZZDgwTx.js";import"./Input-B9motj4l.js";import"./useControlled-DZa6FNla.js";import"./Button-2AhFByte.js";import"./small-cross-AHNwKH-0.js";import"./ActionButton-DKYyXSbF.js";import"./Checkbox-5N-YWdQP.js";import"./useValueChanged-LafOKdn0.js";import"./CollapsiblePanel-Xwe8c9pF.js";import"./MultiColumnSortDialog-BjjGFOba.js";import"./MenuTrigger-BDQiKkfp.js";import"./CompositeItem-SQA_IIyG.js";import"./ToolbarRootContext-D_KZXAup.js";import"./getDisabledMountTransitionStyles-BdwhjLM3.js";import"./getPseudoElementBounds-DRV3tTt5.js";import"./chevron-down-B2G_smGI.js";import"./index-B7w2hjNg.js";import"./error-7FvWp7D0.js";import"./BaseCbacBanner-R7ys_q2e.js";import"./makeExternalStore-D99Ax1Zi.js";import"./Tooltip-CUxqTMTK.js";import"./PopoverPopup-DgDU7fL-.js";import"./debounce-CuJqoMgC.js";import"./useOsdkClient-BUTuIt2q.js";import"./tick-pW-8BtNc.js";import"./DropdownField-BQkHbNRZ.js";import"./isEqual-ByQ8noGx.js";import"./withOsdkMetrics-BVhEzQUJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
