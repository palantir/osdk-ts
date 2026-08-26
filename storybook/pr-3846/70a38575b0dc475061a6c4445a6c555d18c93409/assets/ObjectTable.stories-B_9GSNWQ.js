import{j as i}from"./iframe-gVAmUTQg.js";import{O as p}from"./object-table-D9jtfPUd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-MV-dZacT.js";import"./preload-helper-3Sf5Feu3.js";import"./Table-Bn8VFvlv.js";import"./index-BeeoVX-q.js";import"./Dialog-BPW7Fnqp.js";import"./cross-jlTg3KlE.js";import"./svgIconContainer-B4Z8Cc9p.js";import"./useBaseUiId-CHWfe0kM.js";import"./InternalBackdrop-MQIEsE87.js";import"./composite-DuUe5pNY.js";import"./index-J26Dm_pE.js";import"./index-G-6YzhfM.js";import"./index-ZTHZOD5S.js";import"./useEventCallback-BGxuyWEQ.js";import"./SkeletonBar-Dr7WQbwR.js";import"./LoadingCell-DXD9SzMl.js";import"./ColumnConfigDialog-BsHyb-5Z.js";import"./DraggableList-CAsDI2FA.js";import"./search-BaBEiFT5.js";import"./Input-BkbQvjPR.js";import"./useControlled-CdRGPDPf.js";import"./isEqual-UcadrFyw.js";import"./isObject-BiW_nSk5.js";import"./Button-Dr-T1AFV.js";import"./ActionButton-CqliKloO.js";import"./Checkbox-D2PC0jxt.js";import"./useValueChanged-ByAqqMPO.js";import"./CollapsiblePanel-wCqvJGO2.js";import"./MultiColumnSortDialog-BN0XCeIQ.js";import"./MenuTrigger-CKbR4gwr.js";import"./CompositeItem-ieCqGqC2.js";import"./ToolbarRootContext-ByYznoe0.js";import"./getDisabledMountTransitionStyles-BQxyBjfI.js";import"./getPseudoElementBounds-Bv56xCKO.js";import"./chevron-down-C1g0o6pf.js";import"./index-CR2aVeKh.js";import"./error-tp1IHQ0n.js";import"./BaseCbacBanner-ATQ7faMG.js";import"./makeExternalStore-DdyFijLM.js";import"./Tooltip-BPUhfpna.js";import"./PopoverPopup-CaEv5Luc.js";import"./toNumber-kAKe2Owq.js";import"./useOsdkClient-CD_W310F.js";import"./tick-5ftwsX0l.js";import"./DropdownField-DzuaA_EY.js";import"./withOsdkMetrics-F5cMDIFA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
