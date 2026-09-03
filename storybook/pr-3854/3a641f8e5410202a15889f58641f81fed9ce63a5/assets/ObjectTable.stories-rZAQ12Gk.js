import{j as i}from"./iframe-j4hxb_Xi.js";import{O as p}from"./object-table-BI4xWz0u.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3ikCcPv.js";import"./preload-helper-Do_lUb4H.js";import"./Table-BI73JjMi.js";import"./index-C2vlaWfk.js";import"./Dialog-C_3vuBpX.js";import"./cross-V5IOmaZQ.js";import"./svgIconContainer-ML2hE1ik.js";import"./useBaseUiId-D5s976C8.js";import"./InternalBackdrop-DGaRLsH3.js";import"./composite-8AKIVtYF.js";import"./index-BMB9qZtR.js";import"./index-C7oNg6UJ.js";import"./index-BsInuNtZ.js";import"./useEventCallback-BYH_LbXE.js";import"./SkeletonBar-B-YlJ_Tc.js";import"./LoadingCell-C_oDDOx4.js";import"./ColumnConfigDialog-Cr50Jo2W.js";import"./DraggableList-7T1t1X7E.js";import"./search-DCDkF9iN.js";import"./Input-D8fXhbo_.js";import"./useControlled-BmMzvKVf.js";import"./isEqual-Bfj0ieG6.js";import"./isObject-vOg4RMPu.js";import"./Button-GEQzl9-M.js";import"./ActionButton-CJmqd-UA.js";import"./Checkbox-DgnqXkSI.js";import"./useValueChanged-Bcv4gkmO.js";import"./CollapsiblePanel-BwNh9QZO.js";import"./MultiColumnSortDialog-BFva9vCq.js";import"./MenuTrigger-CR7CYImL.js";import"./CompositeItem-DUNLWbkZ.js";import"./ToolbarRootContext-DnOPaxZU.js";import"./getDisabledMountTransitionStyles-BgogkKAD.js";import"./getPseudoElementBounds-O7D4CDxi.js";import"./chevron-down-RSAghytU.js";import"./index-UqWZCDPB.js";import"./error-C23fB5PK.js";import"./BaseCbacBanner-CmEjL_8O.js";import"./makeExternalStore-BjQ810PL.js";import"./Tooltip-B9Z7ru36.js";import"./PopoverPopup-DZbQlYli.js";import"./toNumber-A7aHzW2i.js";import"./useOsdkClient-DpQS_r_L.js";import"./tick-G3Pq2ACj.js";import"./DropdownField-DqY3ktwA.js";import"./withOsdkMetrics-BYBtK9LJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
