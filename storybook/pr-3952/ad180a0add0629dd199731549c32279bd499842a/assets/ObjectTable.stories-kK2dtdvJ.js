import{j as i}from"./iframe-kjaGychq.js";import{O as p}from"./object-table-DtAOwnvR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChSKEd-t.js";import"./preload-helper-Bl0HOLga.js";import"./Table-yceMqCPQ.js";import"./index-DjgQhnBF.js";import"./Dialog-BqHc_IIV.js";import"./cross-L2jMPbGH.js";import"./svgIconContainer-CspjkWlr.js";import"./useBaseUiId-TjxpSWOe.js";import"./InternalBackdrop-1yzCUhph.js";import"./composite-BkSyEkbC.js";import"./index-D7cO7uk3.js";import"./index-6OM5s4An.js";import"./index-D-NViNaC.js";import"./useEventCallback-C-yX551Y.js";import"./SkeletonBar-BvGzHd7M.js";import"./LoadingCell-CKFEdKpP.js";import"./ColumnConfigDialog-CF8ehKcw.js";import"./DraggableList-CFUKHjHh.js";import"./search-CQrDhBIK.js";import"./Input-DVuwFRa1.js";import"./useControlled-Kf_hbsZS.js";import"./Button-DXRU1CRA.js";import"./small-cross-B0RAbmMl.js";import"./ActionButton-C_0lopXI.js";import"./Checkbox-BKEIWW3F.js";import"./useValueChanged-BMFv-pZ-.js";import"./CollapsiblePanel-DqljYdxc.js";import"./MultiColumnSortDialog-DzsepXD7.js";import"./MenuTrigger-GWXScTdU.js";import"./CompositeItem-HSXuyywu.js";import"./ToolbarRootContext-C2zyjXkq.js";import"./getDisabledMountTransitionStyles-DWY7W2-l.js";import"./getPseudoElementBounds-CuiFjfC9.js";import"./chevron-down-CgpyX1i1.js";import"./index-CYDXmlsy.js";import"./error-DkyVF_rd.js";import"./BaseCbacBanner-C9-Woo9C.js";import"./makeExternalStore-DIRQhbnc.js";import"./Tooltip-BwAGqb-f.js";import"./PopoverPopup-Dx6lE3v2.js";import"./debounce-CIETSCiW.js";import"./useOsdkClient-C_JMrZ9l.js";import"./tick-Ce83b2nO.js";import"./DropdownField-6291IN6f.js";import"./isEqual-BNwwKxjx.js";import"./withOsdkMetrics-Dj5RKdqB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
