import{j as i}from"./iframe-tNZJ_yts.js";import{O as p}from"./object-table-CvQDVRcw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--gB9wU8Y.js";import"./preload-helper-Cs-zZmWk.js";import"./Table-DeKYMKeJ.js";import"./index-GtjnSSRw.js";import"./Dialog-staNvNsK.js";import"./cross-ocv2rHpU.js";import"./svgIconContainer-Cg9fo9q3.js";import"./useBaseUiId-CfzXRAwD.js";import"./InternalBackdrop-jubCrN1B.js";import"./composite-BiyNCJEr.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./index-9T6sqMOx.js";import"./useEventCallback-D6FBSsJz.js";import"./SkeletonBar-sb4uPQ8b.js";import"./LoadingCell-I-_CFKV7.js";import"./ColumnConfigDialog-Cc56nC7O.js";import"./DraggableList-DH-viUUC.js";import"./search-380Wfs82.js";import"./Input-Bd3UykWw.js";import"./useControlled-BcyW94WW.js";import"./Button-q3PQJ8YO.js";import"./small-cross-C9dMCIc4.js";import"./ActionButton-BB8RqWff.js";import"./Checkbox-Dp8n9WYf.js";import"./useValueChanged-D4hqIs_l.js";import"./CollapsiblePanel-BvhEme4S.js";import"./MultiColumnSortDialog-DeJrbkZy.js";import"./MenuTrigger-8vrT9vsX.js";import"./CompositeItem-DK62Ja5z.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./getDisabledMountTransitionStyles-Wli5EKop.js";import"./getPseudoElementBounds-B-GSVRKS.js";import"./chevron-down-B8TK3y2h.js";import"./index-ZWb-P89H.js";import"./error-DA-ZYNwq.js";import"./BaseCbacBanner-VH61pZkc.js";import"./makeExternalStore-BGIMf0MS.js";import"./Tooltip-DwSNZTrr.js";import"./PopoverPopup-BsY6KTlb.js";import"./debounce-DkKRnBI2.js";import"./useOsdkClient-BvPv-iE2.js";import"./tick-B76tZgIx.js";import"./DropdownField-Bn2CvIkr.js";import"./isEqual-Be3s4PRI.js";import"./withOsdkMetrics-CxocJMpO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
