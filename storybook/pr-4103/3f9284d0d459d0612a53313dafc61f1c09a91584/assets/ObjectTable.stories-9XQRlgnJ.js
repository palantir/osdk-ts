import{j as i}from"./iframe-DWfJ7zGz.js";import{O as p}from"./object-table-ifnqVfK_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-mZSvPldC.js";import"./preload-helper-BLrTx2bV.js";import"./Table-DOkpSLD4.js";import"./index-gWYSOhKn.js";import"./Dialog-Dx95N8v8.js";import"./cross-osdHHFE1.js";import"./svgIconContainer-DSpgm6ur.js";import"./useBaseUiId-R5Nwqwa3.js";import"./InternalBackdrop-D1mFfPjU.js";import"./composite-CRrOsq3D.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./index-SCL8CoE2.js";import"./useEventCallback-Cb-N_Op1.js";import"./SkeletonBar-C6g6-rvc.js";import"./LoadingCell-XgZ7JSq_.js";import"./ColumnConfigDialog-C922l1BR.js";import"./DraggableList-C-LbpFb3.js";import"./search-tI2FUc7S.js";import"./Input-nyG97nhE.js";import"./useControlled-x_cvzMnI.js";import"./Button-D-n8pDY3.js";import"./small-cross-D0wotoyp.js";import"./ActionButton-dHwh91E3.js";import"./Checkbox-B1O25Qci.js";import"./useValueChanged-6sg9t9oG.js";import"./CollapsiblePanel-DvipQVw5.js";import"./MultiColumnSortDialog-HHS7Y2AU.js";import"./MenuTrigger-DzPNPZYw.js";import"./CompositeItem-Db-3OHhb.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./getDisabledMountTransitionStyles-Ckgs-zFo.js";import"./getPseudoElementBounds-CH6esPuI.js";import"./chevron-down-B0X1iKQC.js";import"./index-1zb5OrbF.js";import"./error-DqCKC8-V.js";import"./BaseCbacBanner-DglM1_JI.js";import"./makeExternalStore-BbdjnJds.js";import"./Tooltip-D5kCXUrq.js";import"./PopoverPopup-DzxcpTZ2.js";import"./debounce-D-xnc5gC.js";import"./useOsdkClient-BrdUMoba.js";import"./tick-B7MxtGy7.js";import"./DropdownField-BX_-W0jL.js";import"./isEqual-Dymixah0.js";import"./withOsdkMetrics-CuePKHJA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
