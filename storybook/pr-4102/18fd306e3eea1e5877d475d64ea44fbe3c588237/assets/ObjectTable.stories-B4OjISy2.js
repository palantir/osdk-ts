import{j as i}from"./iframe-B30VXZ-6.js";import{O as p}from"./object-table-DH_gUMto.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeVaToUA.js";import"./preload-helper-ChWHhmMQ.js";import"./Table-BoQribm-.js";import"./index-C8WN5xda.js";import"./Dialog-D_6IT7W5.js";import"./cross-q0dJk3Qv.js";import"./svgIconContainer-CDJpdA9T.js";import"./useBaseUiId-N1dQpqNi.js";import"./InternalBackdrop-g2UdgSpr.js";import"./composite-CL2Urpfy.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./index-DR-P8k5n.js";import"./useEventCallback-Dd-rW-bH.js";import"./SkeletonBar-CoNjpQ5V.js";import"./LoadingCell-Cq17MdUI.js";import"./ColumnConfigDialog-C1sWO9u3.js";import"./DraggableList-D3HI0B0s.js";import"./search-Mz2TVtVf.js";import"./Input-CUQ6PF3-.js";import"./useControlled-jMDaMrsG.js";import"./Button-Fs0rdLv2.js";import"./small-cross-CV5I4AiV.js";import"./ActionButton-4fvGoYw3.js";import"./Checkbox-DR-GfH3U.js";import"./useValueChanged-3Pjfz6XN.js";import"./CollapsiblePanel-DTqM16KR.js";import"./MultiColumnSortDialog-DQYaLkK-.js";import"./MenuTrigger-CxX-_HAH.js";import"./CompositeItem-DXi528OA.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./getDisabledMountTransitionStyles-fWLm1dIh.js";import"./getPseudoElementBounds-DqAHYrF9.js";import"./chevron-down-DiQ4Q7Kd.js";import"./index-D6kqTvDq.js";import"./error-Cc1FQeFa.js";import"./BaseCbacBanner-eN234pk2.js";import"./makeExternalStore-nH4o41kb.js";import"./Tooltip-DH7dVDCh.js";import"./PopoverPopup-CE8H8wc4.js";import"./debounce-jCNBE6lD.js";import"./useOsdkClient-CuQp5EFx.js";import"./tick-C3_-7A_u.js";import"./DropdownField-C7LGxFH_.js";import"./isEqual-CMlUKjD_.js";import"./withOsdkMetrics-DEl0Ng20.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
