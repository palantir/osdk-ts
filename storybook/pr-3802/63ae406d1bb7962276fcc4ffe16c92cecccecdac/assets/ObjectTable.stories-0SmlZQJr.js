import{j as i}from"./iframe-DjO1Y5KD.js";import{O as p}from"./object-table-BXEabZx_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ueYL3E1_.js";import"./preload-helper-DHosF_Vr.js";import"./Table-CXPmdf4i.js";import"./index-Da8z7oEc.js";import"./Dialog-BvkiDU_U.js";import"./cross-tGA7XqzW.js";import"./svgIconContainer-D6HUiu07.js";import"./useBaseUiId-Cn6_ygUf.js";import"./InternalBackdrop-DC3S6jXh.js";import"./composite-Bd626ASs.js";import"./index-BUxTRb1k.js";import"./index-D93f91Ms.js";import"./index-Dw_Bxqsc.js";import"./useEventCallback-C7x6nWmr.js";import"./SkeletonBar-C-t-5D7v.js";import"./LoadingCell-I1lAaO0m.js";import"./ColumnConfigDialog-D0FmGrhU.js";import"./DraggableList-FCV6IGLZ.js";import"./search-1bd_RPWo.js";import"./Input-DiRNvOoy.js";import"./useControlled-ai9ga_yt.js";import"./isEqual-4uG8zWUg.js";import"./isObject-kNaBNgmh.js";import"./Button-BNxBvJnR.js";import"./ActionButton-BIZrEYUh.js";import"./Checkbox-W-lD-xoQ.js";import"./useValueChanged-KhncHdx6.js";import"./CollapsiblePanel-Dh7E4-x5.js";import"./MultiColumnSortDialog-CpFd9R_l.js";import"./MenuTrigger-OMzSeneh.js";import"./CompositeItem-CRMRF0tg.js";import"./ToolbarRootContext-B8x2s3ZI.js";import"./getDisabledMountTransitionStyles-BRX2szHm.js";import"./getPseudoElementBounds-BDK5ESci.js";import"./chevron-down-pR2fh_mT.js";import"./index-BFpVUcDF.js";import"./error-a7j3r22v.js";import"./BaseCbacBanner--QhyR6T3.js";import"./makeExternalStore-Cp0-nqWS.js";import"./Tooltip-BhgqSq7E.js";import"./PopoverPopup-26HR0rR7.js";import"./toNumber-sv9WmTId.js";import"./useOsdkClient-2X6mK27g.js";import"./tick-CQ81Odyk.js";import"./DropdownField-BItJqzBd.js";import"./withOsdkMetrics-DNr9JQQP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
