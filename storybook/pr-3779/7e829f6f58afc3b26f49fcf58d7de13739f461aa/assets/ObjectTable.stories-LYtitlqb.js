import{j as i}from"./iframe-C4zdqVWj.js";import{O as p}from"./object-table-5y_eVbGC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjmV3CHn.js";import"./preload-helper-B7IRCv2i.js";import"./Table-BWPn6ED7.js";import"./index-CDa3Dpks.js";import"./Dialog-MY0z2_xP.js";import"./cross-CcKzwauY.js";import"./svgIconContainer-Dl60orHi.js";import"./useBaseUiId-C3-O81r1.js";import"./InternalBackdrop-DqCdUi6X.js";import"./composite-BOKzBbqE.js";import"./index-C-EVsM9H.js";import"./index-Bm-WBCaz.js";import"./index-CSSkJhd4.js";import"./useEventCallback-DzWmOzmx.js";import"./SkeletonBar-DJaveH5w.js";import"./LoadingCell-zoMfqBjd.js";import"./ColumnConfigDialog-DLxA3N4e.js";import"./DraggableList-DnQXeKHB.js";import"./search-D_jp9buf.js";import"./Input-CS5KY3Rt.js";import"./useControlled-BrGKFAOi.js";import"./isEqual-C0_uJpan.js";import"./isObject-NBpvH-VP.js";import"./Button-DnwMOogo.js";import"./ActionButton-CMS_gGpM.js";import"./Checkbox-DtK7jRa-.js";import"./useValueChanged-C4h3bH8g.js";import"./CollapsiblePanel-DA_mKU-k.js";import"./MultiColumnSortDialog-CLR96K0C.js";import"./MenuTrigger-CKsgtdQN.js";import"./CompositeItem-BBqAN0oe.js";import"./ToolbarRootContext-Cs3bwfMD.js";import"./getDisabledMountTransitionStyles-vcPfD5Po.js";import"./getPseudoElementBounds-BCuazdjb.js";import"./chevron-down-BfWdzJim.js";import"./index-DaQh8MoE.js";import"./error--oEoM1lA.js";import"./BaseCbacBanner-BNR_qvcW.js";import"./makeExternalStore-DB6uj4vP.js";import"./Tooltip-Cg1rzKhs.js";import"./PopoverPopup-BOpSDf1z.js";import"./toNumber-CVAuJ7yr.js";import"./useOsdkClient-DE0gigoB.js";import"./tick-CYjee-q_.js";import"./DropdownField-Bdhoiu2-.js";import"./withOsdkMetrics-1nDs0-t4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
