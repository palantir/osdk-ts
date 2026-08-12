import{j as i}from"./iframe-B4bpzrvR.js";import{O as p}from"./object-table-BVvsWR2G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KqBjQ7CD.js";import"./preload-helper-ygR31QqW.js";import"./Table-CjzDjeDQ.js";import"./index-BsbymTi9.js";import"./Dialog-ChKLN39C.js";import"./cross-n7An2nll.js";import"./svgIconContainer-_zfJv1vm.js";import"./useBaseUiId-DQnro2m8.js";import"./InternalBackdrop-kI4blW8q.js";import"./composite-CWXRwiuA.js";import"./index-sIpWfZRY.js";import"./index-BCiKLWSQ.js";import"./index-OGlUltzw.js";import"./useEventCallback-Qs8lz6jg.js";import"./SkeletonBar-96pcsO9R.js";import"./LoadingCell-B0dGcpUe.js";import"./ColumnConfigDialog-i8-Tjv7R.js";import"./DraggableList-BSdUre9g.js";import"./search-Cyz40xHr.js";import"./Input-ruAaTYrP.js";import"./useControlled-c3mF7Crf.js";import"./isEqual-FyxATBS-.js";import"./isObject-B3oaV668.js";import"./Button-CsATp9gq.js";import"./ActionButton-BZfgIiZS.js";import"./Checkbox-3BCsJkkb.js";import"./useValueChanged-B4Q2Bujm.js";import"./CollapsiblePanel-GhnpHLbS.js";import"./MultiColumnSortDialog-SWAflGub.js";import"./MenuTrigger-Db98uiN-.js";import"./CompositeItem-CBqdXCF4.js";import"./ToolbarRootContext-BdeRPzt2.js";import"./getDisabledMountTransitionStyles-BnPQ5JOv.js";import"./getPseudoElementBounds-BXLfPEf2.js";import"./chevron-down-BzusAapG.js";import"./index-CurRzgfb.js";import"./error-CD3Qxrj1.js";import"./BaseCbacBanner-B3ZHEXJ1.js";import"./makeExternalStore-qWLMmryU.js";import"./Tooltip-CFElPJb6.js";import"./PopoverPopup-C7HXd2s5.js";import"./toNumber-CmfNCgBV.js";import"./useOsdkClient-DshaS5p6.js";import"./tick-BPDBLuOM.js";import"./DropdownField-DLROjcIJ.js";import"./withOsdkMetrics-srCrwIqC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
