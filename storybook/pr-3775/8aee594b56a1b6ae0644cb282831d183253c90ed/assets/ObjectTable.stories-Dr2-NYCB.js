import{j as i}from"./iframe-oJ2FO9gh.js";import{O as p}from"./object-table-DDfdUfwh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bpzz5_WR.js";import"./preload-helper-CvpglEc3.js";import"./Table-Daq1nRPv.js";import"./index-BV7N8IQq.js";import"./Dialog-rr-wanT4.js";import"./cross-JrXM6Q4E.js";import"./svgIconContainer-DrpVPmB5.js";import"./useBaseUiId--8htrZkx.js";import"./InternalBackdrop-WR8b6Qpn.js";import"./composite-DNBMgSTn.js";import"./index-Cc835WrV.js";import"./index-Cs1NT0zx.js";import"./index-DYZJDtdA.js";import"./useEventCallback-Bkdj3IwB.js";import"./SkeletonBar-DmHtdZfF.js";import"./LoadingCell-CnxTs2mT.js";import"./ColumnConfigDialog-xt-kq9cY.js";import"./DraggableList-BLmy14XX.js";import"./search-YW5i8NVp.js";import"./Input-Bnt9eVNU.js";import"./useControlled-C3SPN_RN.js";import"./isEqual-CIsSANAT.js";import"./isObject-CZVCdMvb.js";import"./Button-f6PsM82T.js";import"./ActionButton-DBjSnZHs.js";import"./Checkbox-D_GgxpAc.js";import"./useValueChanged-EI4pgMLr.js";import"./CollapsiblePanel-Clqftq_k.js";import"./MultiColumnSortDialog-CJ4QNJt3.js";import"./MenuTrigger-wCrramWO.js";import"./CompositeItem-Dq5Pjrzb.js";import"./ToolbarRootContext-KIChva0u.js";import"./getDisabledMountTransitionStyles-BdOIDXL5.js";import"./getPseudoElementBounds-BJpCkOYE.js";import"./chevron-down-Ba4HOL7F.js";import"./index-Bm7cqmq_.js";import"./error-B9ewsirH.js";import"./BaseCbacBanner-wohGbFNN.js";import"./makeExternalStore-D6lsgFI3.js";import"./Tooltip-C1gKNyzG.js";import"./PopoverPopup-BQM51qRN.js";import"./toNumber-B6mridBS.js";import"./useOsdkClient-BRxg0s9r.js";import"./tick-CRJBTjv9.js";import"./DropdownField-CBUm68iK.js";import"./withOsdkMetrics-BAaL3YVb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
