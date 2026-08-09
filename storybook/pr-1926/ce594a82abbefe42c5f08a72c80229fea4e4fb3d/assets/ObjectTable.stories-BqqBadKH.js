import{j as i}from"./iframe-DhlbjbeZ.js";import{O as p}from"./object-table-C8nDhfH0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COnFFcAi.js";import"./preload-helper-B3ZbJ-bP.js";import"./Table-embaBjrz.js";import"./index-kWv8s-4z.js";import"./Dialog-BGSHwo-W.js";import"./cross-B1OAvnP_.js";import"./svgIconContainer-BJqj6PDa.js";import"./useBaseUiId-B9Y_8LY0.js";import"./InternalBackdrop-CqmW82gT.js";import"./composite-C9hedtre.js";import"./index-t6f6IwGx.js";import"./index-BjXaHPcG.js";import"./index-CGRvi5ZA.js";import"./useEventCallback-BzDinzsO.js";import"./SkeletonBar-D6exssjq.js";import"./LoadingCell-DvngwTuw.js";import"./ColumnConfigDialog-C9Z118mT.js";import"./DraggableList-DsUyCW9A.js";import"./search-BIxqLZiv.js";import"./Input-D0rK2bUF.js";import"./useControlled-K9ko4WNA.js";import"./isEqual-BRxuW1NH.js";import"./isObject-B-pcJKyf.js";import"./Button-xxtzF2yJ.js";import"./ActionButton-CKZ-vgTW.js";import"./Checkbox-D5wg6kc_.js";import"./useValueChanged-Bs2x0KyM.js";import"./CollapsiblePanel-BNOg5Mz1.js";import"./MultiColumnSortDialog-L67CEFXN.js";import"./MenuTrigger-DEXLRaJ3.js";import"./CompositeItem-Bv4DEkpZ.js";import"./ToolbarRootContext-BvbVuNMG.js";import"./getDisabledMountTransitionStyles-2r_tzCMn.js";import"./getPseudoElementBounds-BBVTS-aJ.js";import"./chevron-down-CVGBo-H-.js";import"./index-CSOX7XNN.js";import"./error-DwtADrTi.js";import"./BaseCbacBanner-Bx0jmi4m.js";import"./makeExternalStore-CAKRXzbv.js";import"./Tooltip-C339oC4A.js";import"./PopoverPopup-Difabenz.js";import"./toNumber-B4WWmduY.js";import"./useOsdkClient-CeUHuBqw.js";import"./tick-sc-wTqG-.js";import"./DropdownField-S_rrnk6q.js";import"./withOsdkMetrics-DMzIZKlf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
