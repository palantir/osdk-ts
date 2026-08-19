import{j as i}from"./iframe-DMCinZdR.js";import{O as p}from"./object-table-CWBnrHhx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7bcbw2P.js";import"./preload-helper-BCg2fv9s.js";import"./Table-LtgmsszG.js";import"./index-Cn1vMB8x.js";import"./Dialog-lkRAWS3Z.js";import"./cross-CcPjSvKf.js";import"./svgIconContainer-De7fNnjX.js";import"./useBaseUiId-BeT3oypJ.js";import"./InternalBackdrop-DdnNDztF.js";import"./composite-yv0I3xy5.js";import"./index-YxjRsNBV.js";import"./index-DvMnSwXX.js";import"./index-Db-Y2AMC.js";import"./useEventCallback-BeOJzBKk.js";import"./SkeletonBar-BkZPaYD6.js";import"./LoadingCell-CIeGigir.js";import"./ColumnConfigDialog-B3u-p7yM.js";import"./DraggableList-B3QVX3Cw.js";import"./search-CjEQMDkw.js";import"./Input-wY3__TYn.js";import"./useControlled-DU_OOF2s.js";import"./Button-DPfft23P.js";import"./small-cross-DvtylMEA.js";import"./ActionButton-CF7SnFNB.js";import"./Checkbox-B0X6lu94.js";import"./useValueChanged-BnW5wBJz.js";import"./CollapsiblePanel-BPN8nR8T.js";import"./MultiColumnSortDialog-Da8rV0Qy.js";import"./MenuTrigger-BWlRwIPv.js";import"./CompositeItem-zAhJ8rlm.js";import"./ToolbarRootContext-Bgke2_pO.js";import"./getDisabledMountTransitionStyles-DkCCt5VQ.js";import"./getPseudoElementBounds-Dwn15gm-.js";import"./chevron-down-Brw6_9zU.js";import"./index-GmGknXw_.js";import"./error-3Qx0C84K.js";import"./BaseCbacBanner-CBoCpMa-.js";import"./makeExternalStore-DypcUv4D.js";import"./Tooltip-CWCf5amX.js";import"./PopoverPopup-DMOv5d-q.js";import"./debounce-D0Ct84sS.js";import"./useOsdkClient-HbedtQt7.js";import"./tick-DVS2p6T6.js";import"./DropdownField-Cspf7eME.js";import"./isEqual-DPMSqT0P.js";import"./withOsdkMetrics-DZCo0Bwa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
